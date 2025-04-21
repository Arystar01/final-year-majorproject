import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();
export async function POST(req) {
    try {
      const { disease, seriousness } = await req.json();
      disease="penumonia";
      seriousness="mild";
  
      const prompt = `Tell me about the disease ${disease}. Its seriousness is ${seriousness}. Include symptoms , treatments and precautions.`;
  
      const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        }),
      });
  
      const result = await openaiRes.json();
      console.log(result);
      return Response.json({ data: result.choices[0].message.content });
    } catch (err) {
      return Response.json({ error: err.message }, { status: 500 });
    }
  }
  