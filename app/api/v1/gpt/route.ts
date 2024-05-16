import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  try {
    const query = await req.json();
    console.log(query);
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: `${query}` }],
      model: "gpt-3.5-turbo",
    });

    const answer = completion.choices[0].message.content;
    return Response.json({ answer });
  } catch (error) {}
}
