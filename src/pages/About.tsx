import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Users, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Our
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Skincare Recommender
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Helping you discover the perfect skincare routine, one recommendation at a time
            </p>
          </div>
          
          <div className="space-y-8 mb-16">
            <Card className="p-8 shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe everyone deserves healthy, glowing skin. Our mission is to simplify 
                    the overwhelming world of skincare by providing personalized recommendations 
                    based on scientific research and your unique skin needs.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">How It Works</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our intelligent recommendation system analyzes your skin type and specific 
                    concerns to match you with products that truly work. We consider factors like:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Your unique skin type (oily, dry, combination, sensitive, or normal)</li>
                    <li>Specific skin concerns (acne, pigmentation, dullness, etc.)</li>
                    <li>Product ingredients and their proven benefits</li>
                    <li>Compatibility between different products</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary/50">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Why Trust Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our recommendations are based on dermatological research and ingredient science. 
                    We focus on gentle, effective formulations suitable for various skin types and 
                    concerns. While our tool provides guidance, we always recommend consulting with 
                    a dermatologist for persistent skin issues.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center bg-card rounded-2xl p-12 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Take our quick quiz to discover products perfectly matched to your skin's needs
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/skin-type")}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
