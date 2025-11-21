import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SkinTypeCard } from "@/components/SkinTypeCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Droplets, Sun, Zap, Heart, Smile } from "lucide-react";

const skinTypes = [
  {
    id: "Oily",
    icon: Droplets,
    title: "Oily",
    description: "Shiny skin with visible pores, prone to breakouts"
  },
  {
    id: "Dry",
    icon: Sun,
    title: "Dry",
    description: "Tight, flaky skin that feels rough"
  },
  {
    id: "Combination",
    icon: Zap,
    title: "Combination",
    description: "Oily T-zone with dry cheeks"
  },
  {
    id: "Sensitive",
    icon: Heart,
    title: "Sensitive",
    description: "Easily irritated, prone to redness"
  },
  {
    id: "Normal",
    icon: Smile,
    title: "Normal",
    description: "Balanced, neither too oily nor dry"
  }
];

const SkinTypeSelection = () => {
  const [selectedType, setSelectedType] = useState<string>("");
  const navigate = useNavigate();
  
  const handleContinue = () => {
    if (selectedType) {
      navigate("/quiz", { state: { skinType: selectedType } });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What's Your Skin Type?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the option that best describes your skin to get personalized recommendations
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skinTypes.map((type, index) => (
              <div key={type.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <SkinTypeCard
                  icon={type.icon}
                  title={type.title}
                  description={type.description}
                  selected={selectedType === type.id}
                  onClick={() => setSelectedType(type.id)}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={handleContinue}
              disabled={!selectedType}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft disabled:opacity-50"
            >
              Continue to Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinTypeSelection;
