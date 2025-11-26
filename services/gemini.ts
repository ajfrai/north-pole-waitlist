import { GoogleGenAI, Type } from "@google/genai";
import { GiftItem } from "../types";
import { v4 as uuidv4 } from 'uuid'; // We will use a simple random ID generator in App context, but for service let's mock or pass helper

// Simple UUID generator for this module since we don't have uuid package
const generateId = () => Math.random().toString(36).substr(2, 9);

export const getGiftSuggestions = async (
  interests: string, 
  ageGroup: string
): Promise<GiftItem[]> => {
  if (!process.env.API_KEY) {
    console.warn("No API Key found for Gemini");
    return [];
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Suggest 5 fun, family-friendly christmas gift ideas for a person who likes: ${interests}. Age group: ${ageGroup}. Return a JSON array.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Name of the gift product" },
              searchTerm: { type: Type.STRING, description: "Search query to find this product online" }
            },
            required: ["name", "searchTerm"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];

    const suggestions = JSON.parse(text);
    
    return suggestions.map((s: any) => ({
      id: generateId(),
      name: s.name,
      link: `https://www.google.com/search?q=${encodeURIComponent(s.searchTerm)}`,
      claimedBy: null
    }));

  } catch (error) {
    console.error("Gemini AI Error:", error);
    return [];
  }
};
