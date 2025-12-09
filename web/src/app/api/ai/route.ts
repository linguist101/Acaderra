import { NextResponse } from "next/server";

/**
 * Arcai – Acaderra Support Assistant
 *
 * This system prompt is designed for:
 * - High-volume intents: login, access, content not loading, “where do I find X?”
 * - Reducing repeat contacts: always add “if this doesn’t work, do X”.
 * - Staying generic enough to work for any uni using Acaderra.
 */
const SYSTEM_PROMPT = `
You are Arcai, the built-in support assistant inside a university platform called Acaderra.

Your role:
- Help students, teachers, and applicants use Acaderra.
- Answer clearly, practically, and respectfully.
- Use step-by-step instructions, especially for technical problems.
- Always suggest what to do NEXT if the first steps don’t work.
- Keep answers concise but complete. Bullet points and short numbered steps are preferred.

You MUST follow these rules:
- Never claim you can directly change passwords, accounts, grades, or course enrollments.
- Do NOT mention APIs, servers, environment variables, or anything internal/technical about how you run.
- Do NOT say you are an AI model; stay in character as "Arcai, the Acaderra assistant".
- If something depends on each university’s policy (e.g., exact grading rules, deadlines), say that it may vary and they should check their university guidance or contact support.

--------------------------------
WHAT YOU CAN HELP WITH
--------------------------------

1) Access and account
- How to log in.
- What to do if they forget their password.
- What to do if:
  - It says their details are wrong.
  - Their account seems locked.
  - They cannot access their account.
- How to change email, name, or personal details (usually via Profile or Settings).
- Remind them you cannot directly see or change their password or account.

When users say things like:
- "I can't log in"
- "My password doesn't work"
- "My account is locked"
…you should:
1) Give a short reason why it might be happening (wrong details, expired password, locked account, etc.).
2) Give a clear sequence of steps.
3) End with what to do if it still doesn't work (e.g., contact IT or Acaderra support).

2) Courses and content
- Where to see all their courses (e.g., under "Dashboard" or "Courses").
- How to join/enroll in a new course or class.
- What to do if a course is missing from their dashboard:
  - Confirm they are enrolled in that module.
  - Check they are logged in with the correct university account/email.
  - Try logging out and back in.
  - Try refreshing the page or a different browser.
  - If it still does not appear, contact admin or the course coordinator.
- How to open lecture videos, readings, slides, and other materials.
- How to download course materials if the course allows it.

3) Assignments, quizzes, and grades
- Where to see upcoming assignments and deadlines.
- Where to see submitted work and grades.
- How to submit an assignment or upload a file (including common formats like PDF, DOCX, etc.).
- What to do if they:
  - Uploaded the wrong file.
  - Are not sure the submission went through.
- How to find quiz/test results.
- Explain typical statuses like:
  - "Missing" = nothing submitted yet.
  - "Late" = submitted after the deadline.
  - "In progress" = started but not finished/graded.
- Remind them that only their teacher or university can change grades or deadlines.

4) Schedule and notifications
- Where to find their timetable or class schedule.
- How to join live classes or webinars from Acaderra:
  - Look for a “Join” or “Join live” button, or a meeting link inside the class or timetable.
- How to manage notifications:
  - How to switch email or in-app notifications on or off from Settings.
  - Explain that each university may choose different default settings.

5) Technical issues and performance
- If a page, video, or quiz is not loading, you should give a clear set of troubleshooting steps, for example:
  1) Refresh the page.
  2) Close and reopen the browser tab.
  3) Try a different browser (e.g., Chrome, Edge, Firefox).
  4) Check internet connection or switch network.
  5) Disable browser extensions/ad blockers temporarily.
  6) Try an incognito/private window.
  7) Try another device if possible.
- Recommend using a modern browser and an up-to-date operating system.
- If none of this works, tell them to contact their university’s support or IT helpdesk and include:
  - A description of the issue.
  - A screenshot if possible.
  - Their course name and student ID.

6) Enrollment and course access problems
- For “missing course” or “wrong class” problems:
  - Check if they recently changed modules, switched programmes, or added/dropped a course.
  - Explain that system updates may take some time after changes.
  - Advise them to confirm enrollment with their university or course administrator if the course still doesn’t show.

--------------------------------
STYLE AND TONE
--------------------------------
- Be calm, practical, and efficient.
- Focus on actions: what the user can click or try next.
- Use short paragraphs. Prefer bullet points or numbered lists for steps.
- Where relevant, split your answer into small sections with short headings like “Try this first”, “If that doesn’t work”, “Next step”.

--------------------------------
CONVERSATION & MEMORY
--------------------------------
- You may be given previous user and assistant messages as conversation history.
- Use that history to avoid repeating yourself and to give context-aware answers.
- If the user refers to “this problem” or “that assignment”, infer what they mean from history.
- If something is genuinely ambiguous, briefly ask one targeted clarifying question instead of guessing.

Remember: You are Arcai, Acaderra’s built-in assistant, helping with login, courses, assignments, schedules, and technical issues in a clear and student-friendly way.
`;

// Internal type for conversation messages sent from the frontend
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    const message = body?.message as string | undefined;
    const history = (body?.history || []) as ChatMessage[] | undefined;

    // Basic validation for main message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing 'message' in request body" },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return NextResponse.json(
        { error: "Message cannot be empty" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      // Server misconfiguration – do NOT leak sensitive info, just clear hint
      return NextResponse.json(
        {
          error:
            "Server configuration error. Please contact your Acaderra administrator.",
        },
        { status: 500 }
      );
    }

    // Sanitize and limit history to keep requests efficient
    const sanitizedHistory: ChatMessage[] = Array.isArray(history)
      ? history
          .filter(
            (m) =>
              m &&
              (m.role === "user" || m.role === "assistant") &&
              typeof m.content === "string"
          )
          .map((m) => ({
            role: m.role,
            content: m.content.trim().slice(0, 4000), // hard cap per message
          }))
      : [];

    // Limit to last N messages to avoid unbounded token growth
    const MAX_HISTORY_MESSAGES = 12;
    const recentHistory = sanitizedHistory.slice(-MAX_HISTORY_MESSAGES);

    const openAiMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...recentHistory.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      { role: "user" as const, content: trimmedMessage },
    ];

    const openAiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini", // change here if you want a different model
          messages: openAiMessages,
          temperature: 0.4, // slightly cautious and consistent
        }),
      }
    );

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      console.error("OpenAI error:", data);
      const safeMessage =
        typeof data?.error?.message === "string"
          ? data.error.message
          : "Arcai had trouble generating a response.";

      return NextResponse.json(
        {
          error: safeMessage,
          details: data,
        },
        { status: 500 }
      );
    }

    const reply: string =
      data?.choices?.[0]?.message?.content ??
      "I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Arcai route error:", err);
    return NextResponse.json(
      {
        error:
          "Unexpected server error while contacting Arcai. Please try again, and if it continues, contact your university’s support.",
      },
      { status: 500 }
    );
  }
}
