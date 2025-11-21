import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getRecommendations } from "@/lib/productData";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { skinType, concerns } = location.state || {};
  const [recommendations, setRecommendations] = useState<any[]>([]);
  
  useEffect(() => {
    if (skinType && concerns) {
      const products = getRecommendations(skinType, concerns);
      setRecommendations(products);
    }
  }, [skinType, concerns]);
  
  if (!skinType || !concerns) {
    navigate("/");
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary">Your Personalized Routine</span>
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perfect Products for Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                {skinType} Skin
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Based on your concerns: {concerns.join(", ")}
            </p>
            
            <Button 
              variant="outline" 
              onClick={() => navigate("/skin-type")}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Start Over
            </Button>
          </div>
          
          {recommendations.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((product, index) => (
                <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No specific recommendations found. Try selecting different concerns.
              </p>
              <Button 
                onClick={() => navigate("/quiz", { state: { skinType } })}
                className="mt-6 bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                Try Again
              </Button>
            </div>
          )}
          
          <div className="mt-16 p-8 rounded-2xl bg-card shadow-card text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Remember: Consistency is Key
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Give your new routine at least 4-6 weeks to show results. Always patch test new products 
              and introduce them one at a time. Consult a dermatologist for persistent skin concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
