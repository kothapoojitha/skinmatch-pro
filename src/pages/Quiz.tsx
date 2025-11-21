import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const concerns = [
  { id: "Acne", label: "Acne & Breakouts", description: "Frequent pimples and blemishes" },
  { id: "Pigmentation", label: "Dark Spots & Pigmentation", description: "Uneven skin tone" },
  { id: "Dullness", label: "Dullness", description: "Lack of radiance" },
  { id: "Tanning", label: "Tanning & Sun Damage", description: "Sun-induced darkening" },
  { id: "Large Pores", label: "Large Pores", description: "Visible enlarged pores" },
  { id: "Excess Oil", label: "Excess Oil", description: "Too much sebum production" },
  { id: "Dryness", label: "Dryness & Flakiness", description: "Tight, dehydrated skin" },
  { id: "Sensitivity", label: "Sensitivity & Redness", description: "Easily irritated skin" }
];

const Quiz = () => {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const skinType = location.state?.skinType || "";
  
  const handleConcernToggle = (concernId: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concernId)
        ? prev.filter(id => id !== concernId)
        : [...prev, concernId]
    );
  };
  
  const handleGetRecommendations = () => {
    if (selectedConcerns.length > 0) {
      navigate("/results", { 
        state: { 
          skinType, 
          concerns: selectedConcerns 
        } 
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Are Your Skin Concerns?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select all that apply to get the most accurate product recommendations
            </p>
            <div className="mt-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Skin Type: {skinType}
              </span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {concerns.map((concern, index) => (
              <Card 
                key={concern.id}
                className="p-6 cursor-pointer transition-all duration-300 hover:shadow-soft hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleConcernToggle(concern.id)}
              >
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={selectedConcerns.includes(concern.id)}
                    onCheckedChange={() => handleConcernToggle(concern.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {concern.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {concern.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={handleGetRecommendations}
              disabled={selectedConcerns.length === 0}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft disabled:opacity-50 group"
            >
              Get My Recommendations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
