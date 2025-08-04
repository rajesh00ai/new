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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-6">Personalized Wellness Tips</h2>
        <p className="text-xl text-gray-600 mb-12">
          Get AI-powered wellness recommendations based on Tamil nutritional wisdom and modern health science.
        </p>
        
        <div className="bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl p-8 text-white">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Bot className="text-3xl text-brand-orange" size={32} />
              <h3 className="text-2xl font-semibold">AI Wellness Assistant</h3>
            </div>
            
            <div className="max-w-2xl mx-auto">
              {currentTip ? (
                <Card className="bg-white/20 border-none">
                  <CardContent className="p-6">
                    <div className="text-left space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-brand-orange px-3 py-1 rounded-full text-sm font-medium">
                          {currentTip.category}
                        </span>
                      </div>
                      <p className="text-lg font-medium">{currentTip.tip}</p>
                      <p className="text-sm opacity-90">{currentTip.benefits}</p>
                      {currentTip.additionalInfo && (
                        <p className="text-sm opacity-80 border-t border-white/20 pt-3">
                          {currentTip.additionalInfo}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-6">
                  <p className="text-lg opacity-90">
                    "Based on traditional Tamil wellness practices, incorporating Fig Malt into your morning routine 
                    can enhance digestive health and provide sustained energy throughout the day."
                  </p>
                </div>
              )}
              
              <Button 
                onClick={() => generateTipMutation.mutate()}
                disabled={generateTipMutation.isPending}
                className="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                {generateTipMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Get Your Personalized Tip
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
