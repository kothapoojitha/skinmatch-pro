import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/productData";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {product.description}
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Benefits:</h4>
          <div className="space-y-1">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-medium text-foreground mb-2">How to Use:</h4>
          <p className="text-sm text-muted-foreground">{product.usage}</p>
        </div>
      </div>
    </Card>
  );
};
