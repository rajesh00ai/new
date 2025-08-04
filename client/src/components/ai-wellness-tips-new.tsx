import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Bot, Lightbulb, Loader2 } from "lucide-react";

interface WellnessTipResponse {
  tip: string;
  benefits: string;
  category: string;
  additionalInfo?: string;
}

export default function AIWellnessTips() {
  const [currentTip, setCurrentTip] = useState<WellnessTipResponse | null>(null);
  const { toast } = useToast();

  const generateTipMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/wellness-tips/generate", {
        healthGoal: "general wellness",
        activityLevel: "moderate",
        preferences: ["traditional", "natural", "tamil wellness"]
      });
      return response.json();
    },
    onSuccess: (data: WellnessTipResponse) => {
      setCurrentTip(data);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate wellness tip. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <section id="wellness-ai" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-6">Your Personal Wellness AI</h2>
        <p className="text-lg text-gray-600 mb-12">
          Curious about a specific health topic? Get a wellness tip rooted in Tamil tradition and modern science.
        </p>
        
        <div className="bg-gradient-to-br from-warm-neutral to-soft-neutral rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-brand-green mb-4">Wellness Tip Generator</h3>
          <p className="text-gray-600 mb-6">
            Get a topic like "digestive health" or "energy boost" or "wellness tips"
          </p>
        
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="e.g., Healthy Digestion"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-brand-orange"
                />
              </div>
              
              {currentTip ? (
                <Card className="bg-gradient-to-br from-warm-neutral to-soft-neutral border-none text-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Lightbulb className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-green mb-2">{currentTip.category}</h4>
                        <p className="text-lg mb-4">{currentTip.tip}</p>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium text-brand-green mb-2">Benefits:</h5>
                          <p className="text-sm">{currentTip.benefits}</p>
                        </div>
                        {currentTip.additionalInfo && (
                          <div className="mt-4 text-sm">
                            <p>{currentTip.additionalInfo}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="text-center py-6">
                  <Bot className="w-12 h-12 text-brand-orange mx-auto mb-3" />
                  <p className="text-gray-600">
                    Get personalized wellness tips rooted in Tamil tradition
                  </p>
                </div>
              )}
              
              <Button
                onClick={() => generateTipMutation.mutate()}
                disabled={generateTipMutation.isPending}
                className="bg-brand-orange text-white hover:bg-brand-orange/90 px-8 py-3 text-lg font-medium rounded-full"
              >
                {generateTipMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Get Wellness Tip
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}