import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request){
    console.log("api key: ", process.env.OPENAI_API_KEY);
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

    const response = await openai.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", 
            content: "You are a very grumpy manager frustrated with your junior developer asking you questions"},
            {role: "user",
            content: "how many story points should I assign to this task?"}],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    });
    return NextResponse.json(response)
}