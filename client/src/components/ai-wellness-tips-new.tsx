import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Bot, Lightbulb, Loader2 } from "lucide-react";

export default function AIWellnessTips() {
  const [currentTip, setCurrentTip] = useState<any>(null);
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const generateTipMutation = useMutation({
    mutationFn: async (topic: string) => {
      const response = await apiRequest("POST", "/api/wellness-tips/generate", {
        healthGoal: topic || "general wellness",
        activityLevel: "moderate",
        preferences: ["traditional", "natural", "tamil wellness"]
      });
      return response.json();
    },
    onSuccess: (data) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      generateTipMutation.mutate(inputValue.trim());
    }
  };

  return (
    <section id="wellness-ai" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-6">Your Personal Wellness AI</h2>
        <p className="text-lg text-gray-600 mb-12">
          Curious about a specific health topic? Get a wellness tip rooted in Tamil tradition and modern science.
        </p>
        
        <div className="bg-gradient-to-br from-warm-neutral to-soft-neutral rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-brand-green mb-4">Wellness Tip Generator</h3>
        
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="e.g., digestive health, energy boost"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-brand-orange"
                  />
                  <Button
                    type="submit"
                    disabled={generateTipMutation.isPending || !inputValue.trim()}
                    className="bg-brand-orange text-white hover:bg-brand-orange/90 px-6 py-3 rounded-full"
                  >
                    {generateTipMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Tip"}
                  </Button>
                </div>
              </form>
              
              {currentTip ? (
                <div className="bg-gradient-to-br from-warm-neutral to-soft-neutral border rounded-lg p-6 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="font-semibold text-brand-green mb-2">{currentTip.category}</h4>
                      <p className="text-lg mb-4">{currentTip.tip}</p>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-medium text-brand-green mb-2">Benefits:</h5>
                        <p className="text-sm">{currentTip.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Bot className="w-12 h-12 text-brand-orange mx-auto mb-3" />
                  <p className="text-gray-600">
                    Get personalized wellness tips rooted in Tamil tradition
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}