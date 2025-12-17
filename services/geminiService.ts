import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { EXPERIENCE, PROJECTS, SKILLS, PROFILE } from "../constants";

// Initialize Gemini
// NOTE: In a real production app, you should proxy requests through a backend
// to hide the API KEY, or use Firebase App Check.
// For this demo, we assume the environment variable is secure enough for the client-side build.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PROFILE.name}'s portfolio website.
Your role is to answer questions about ${PROFILE.name}'s skills, experience, and projects professionally and concisely.
Adhere to the following data:

Profile: ${JSON.stringify(PROFILE)}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}

Tone: Professional, friendly, and enthusiastic.
If asked about contact info, refer them to the contact section or mention social links.
Keep answers under 100 words unless asked for details.
Do not hallucinate. If you don't know something based on the data, say "I don't have that information handy, but you can ask Alex directly!"
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm having trouble connecting to the AI brain right now. Please try again later.";
  }
};
