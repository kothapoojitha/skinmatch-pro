import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-skincare.jpg";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Your Personal Skincare Guide
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Discover Your
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Skincare
                </span>
                Routine
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Get personalized product recommendations tailored to your unique skin type and concerns. 
                Science-backed solutions for your best skin ever.
              </p>
              
              <Button 
                size="lg"
                onClick={() => navigate("/skin-type")}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage}
                alt="Skincare products"
                className="relative rounded-3xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Recommender?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make skincare simple by matching you with products that truly work for your skin
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 animate-slide-up">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Personalized</h3>
              <p className="text-muted-foreground">
                Tailored recommendations based on your unique skin type and specific concerns
              </p>
            </div>
            
            <div className="text-center space-y-4 p-8 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex p-4 rounded-full bg-accent/10">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Trusted</h3>
              <p className="text-muted-foreground">
                Science-backed formulations recommended by skincare experts
              </p>
            </div>
            
            <div className="text-center space-y-4 p-8 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex p-4 rounded-full bg-secondary/50">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Simple</h3>
              <p className="text-muted-foreground">
                Easy-to-follow routines that fit seamlessly into your daily life
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
