import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing 'message' in request body" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not set on the server" },
        { status: 500 }
      );
    }

    const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini", // you can change this model name later if you want
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant inside a university platform called Acaderra. Help students quickly and clearly. Keep answers short and practical.",
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      console.error("OpenAI error:", data);
      return NextResponse.json(
        { error: "OpenAI API returned an error", details: data },
        { status: 500 }
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content ?? "I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("AI route error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
