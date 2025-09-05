import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, targetLang } = body;

    if (!text || !targetLang) return NextResponse.json({ translatedText: text });

    if (targetLang === "en") return NextResponse.json({ translatedText: text });

    // Lingva Translate endpoint
    const res = await fetch(`https://lingva.ml/api/v1/${encodeURIComponent(text)}/${targetLang}`);
    if (!res.ok) {
      console.error("Lingva Translate API error:", await res.text());
      return NextResponse.json({ translatedText: text });
    }

    const data = await res.json();
    return NextResponse.json({ translatedText: data.translation });
  } catch (err) {
    console.error("Server error in /api/translate:", err);
    return NextResponse.json({ translatedText: "" });
  }
}
