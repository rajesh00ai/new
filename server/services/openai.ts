import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface WellnessTipRequest {
  healthGoal?: string;
  currentDiet?: string;
  activityLevel?: string;
  age?: number;
  preferences?: string[];
}

export interface WellnessTipResponse {
  tip: string;
  benefits: string;
  category: string;
  additionalInfo?: string;
}

export async function generateWellnessTip(request: WellnessTipRequest): Promise<WellnessTipResponse> {
  try {
    const prompt = `As a Tamil wellness expert specializing in traditional nutrition and modern health science, provide a personalized wellness tip based on the following information:

Health Goal: ${request.healthGoal || 'general wellness'}
Current Diet: ${request.currentDiet || 'not specified'}
Activity Level: ${request.activityLevel || 'moderate'}
Age: ${request.age || 'not specified'}
Preferences: ${request.preferences?.join(', ') || 'none specified'}

Focus on traditional Tamil wellness practices, especially incorporating ingredients like figs, almonds, cashews, and other natural foods. Provide practical, actionable advice that combines ancient wisdom with modern nutritional understanding.

Respond with JSON in this format:
{
  "tip": "specific actionable wellness tip",
  "benefits": "explanation of health benefits",
  "category": "category like 'nutrition', 'digestive health', 'immunity', etc.",
  "additionalInfo": "optional additional context or recipe suggestions"
}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert in traditional Tamil wellness practices and modern nutritional science. Provide personalized wellness advice that combines ancient wisdom with contemporary health knowledge."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      max_tokens: 500,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      tip: result.tip || "Incorporate natural ingredients like figs and almonds into your daily routine for optimal wellness.",
      benefits: result.benefits || "Supports overall health and vitality through traditional Tamil nutrition principles.",
      category: result.category || "general wellness",
      additionalInfo: result.additionalInfo
    };
  } catch (error) {
    console.error("Failed to generate wellness tip:", error);
    
    // Fallback tip based on Tamil wellness traditions
    return {
      tip: "Start your day with soaked almonds and figs to boost energy and support digestive health, following traditional Tamil wellness practices.",
      benefits: "This combination provides essential nutrients, supports brain function, aids digestion, and strengthens immunity naturally.",
      category: "traditional nutrition",
      additionalInfo: "This practice has been followed in Tamil culture for centuries and is backed by modern nutritional science."
    };
  }
}

export async function generateProductRecommendation(userPreferences: string): Promise<string> {
  try {
    const prompt = `Based on these user preferences: "${userPreferences}", recommend how SARIRA Fig Malt can benefit their wellness journey. Focus on traditional Tamil wellness benefits and modern health applications.

Provide a personalized recommendation that explains why Fig Malt would be ideal for their specific needs.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system", 
          content: "You are a Tamil wellness expert recommending SARIRA Fig Malt based on user needs. Be specific about benefits and usage."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 300,
    });

    return response.choices[0].message.content || "SARIRA Fig Malt is an excellent choice for natural wellness, combining traditional Tamil nutrition wisdom with premium organic ingredients.";
  } catch (error) {
    console.error("Failed to generate product recommendation:", error);
    return "SARIRA Fig Malt offers comprehensive wellness benefits through traditional Tamil nutrition, perfect for supporting your health goals naturally.";
  }
}
