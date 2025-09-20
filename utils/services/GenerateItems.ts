import OpenAI from "openai";
import { User } from "../types/User";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface ResponseItem {
  foodName: string;
  foodDescription: string;
  foodIngredients: string[];
  foodCookingSteps: string[];
  nutritionalInfo: string[];
  culturalOrigin: string;
}

// async function generateItems(input: User) {
//   const prompt = `
// Based on this input data: ${JSON.stringify(input.userDetails, null, 2)},
// return a JSON object with the following fields only:
// {
//   "foodName": "string",
//   "foodDescription": "string",
//   "foodIngredients": ["string"],
//   "foodCookingSteps": ["string"],
//   "nutritionalInfo": ["string"],
//   "culturalOrigin": "string"
// }
// Do not include any explanation or extra text, only return valid JSON.
// `;

//   const response = await client.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "developer", content: prompt }],
//   });

//   const text = response.choices[0].message.content;

//   console.log(text);
//   return text;
// }

async function generateItems() {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "Write a short bedtime story about a unicorn.",
  });

  console.log(response.output_text);
}

export { generateItems };
