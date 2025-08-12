import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface WellnessTipRequest { healthGoal?: string; currentDiet?: string; activityLevel?: string; age?: number; preferences?: string[]; }
export interface WellnessTipResponse { tip: string; benefits: string; category: string; additionalInfo?: string; }

export async function generateWellnessTip(request: WellnessTipRequest): Promise<WellnessTipResponse> {
  try {
    const prompt = `As a Tamil wellness expert, provide a wellness tip for: ${request.healthGoal || 'general wellness'}. Focus on traditional ingredients like figs, almonds, cashews. Respond with JSON: {"tip": "actionable tip", "benefits": "health benefits", "category": "category"}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "Tamil wellness expert providing practical health advice." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      max_tokens: 300,
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
    const prompt = `Recommend SARIRA Fig Malt for: "${userPreferences}". Focus on Tamil wellness benefits.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "Tamil wellness expert recommending SARIRA Fig Malt." },
        { role: "user", content: prompt }
      ],
      max_tokens: 200,
    });

    return response.choices[0].message.content || "SARIRA Fig Malt is an excellent choice for natural wellness, combining traditional Tamil nutrition wisdom with premium organic ingredients.";
  } catch (error) {
    console.error("Failed to generate product recommendation:", error);
    return "SARIRA Fig Malt offers comprehensive wellness benefits through traditional Tamil nutrition, perfect for supporting your health goals naturally.";
  }
}
