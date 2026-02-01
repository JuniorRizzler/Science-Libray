
import { GoogleGenAI } from "@google/genai";

// getAITutorResponse uses the Gemini API to provide answers based on the study library context.
export const getAITutorResponse = async (userPrompt: string, context: string) => {
  // Always use gemini-3-pro-preview for complex reasoning and STEM-related tasks like Grade 9 Science tutoring.
  // Initialize the client directly inside the function to ensure it uses the latest process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `You are a helpful Grade 9 Science Tutor. You are helping a student at Appleby College. 
      Use the following context from their study library to answer their question. 
      If the information isn't in the context, use your general scientific knowledge within the Grade 9 curriculum scope.
      Be encouraging, clear, and use simple analogies.
      
      Library Context: ${context.substring(0, 5000)}...
      
      User Question: ${userPrompt}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    // Use the .text property directly as per the latest SDK requirements.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble thinking right now. Please try again in a moment.";
  }
};
