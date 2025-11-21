export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  usage: string;
  image: string;
  suitableFor: {
    skinTypes: string[];
    concerns: string[];
  };
}

export const products: Product[] = [
  {
    id: "gentle-cleanser",
    name: "Gentle Foaming Cleanser",
    description: "A mild, sulfate-free cleanser that gently removes impurities without stripping natural oils.",
    benefits: [
      "Removes dirt and makeup",
      "Maintains skin's natural pH",
      "Soothes and calms skin"
    ],
    usage: "Use morning and evening. Apply to damp skin, massage gently, and rinse thoroughly.",
    image: "/src/assets/cleanser.jpg",
    suitableFor: {
      skinTypes: ["Sensitive", "Dry", "Normal"],
      concerns: ["Sensitivity", "Dryness", "Redness"]
    }
  },
  {
    id: "hydrating-gel",
    name: "Hydrating Gel Moisturizer",
    description: "Lightweight gel formula that provides deep hydration without feeling heavy.",
    benefits: [
      "Intense hydration",
      "Oil-free formula",
      "Quick absorption"
    ],
    usage: "Apply twice daily after cleansing. Gently massage into face and neck.",
    image: "/src/assets/moisturizer.jpg",
    suitableFor: {
      skinTypes: ["Oily", "Combination", "Normal"],
      concerns: ["Dehydration", "Dullness", "Excess Oil"]
    }
  },
  {
    id: "niacinamide-serum",
    name: "Niacinamide 10% Serum",
    description: "Concentrated serum that minimizes pores and evens skin tone.",
    benefits: [
      "Reduces pore appearance",
      "Brightens complexion",
      "Controls oil production"
    ],
    usage: "Apply 3-4 drops to clean skin before moisturizer. Use once or twice daily.",
    image: "/src/assets/serum.jpg",
    suitableFor: {
      skinTypes: ["Oily", "Combination", "Normal"],
      concerns: ["Large Pores", "Pigmentation", "Excess Oil", "Acne"]
    }
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum",
    description: "Potent antioxidant serum that brightens and evens skin tone.",
    benefits: [
      "Fades dark spots",
      "Boosts radiance",
      "Protects from environmental damage"
    ],
    usage: "Apply in the morning after cleansing. Follow with moisturizer and sunscreen.",
    image: "/src/assets/vitamin-c.jpg",
    suitableFor: {
      skinTypes: ["All"],
      concerns: ["Pigmentation", "Dullness", "Dark Spots", "Tanning"]
    }
  },
  {
    id: "broad-spectrum-spf",
    name: "Broad Spectrum SPF 50+",
    description: "Lightweight sunscreen with high protection against UVA and UVB rays.",
    benefits: [
      "Prevents sun damage",
      "No white cast",
      "Water-resistant"
    ],
    usage: "Apply generously as the last step of your morning routine. Reapply every 2 hours.",
    image: "/src/assets/sunscreen.jpg",
    suitableFor: {
      skinTypes: ["All"],
      concerns: ["Tanning", "Pigmentation", "Aging"]
    }
  },
  {
    id: "clay-mask",
    name: "Purifying Clay Mask",
    description: "Deep cleansing mask that draws out impurities and excess oil.",
    benefits: [
      "Unclogs pores",
      "Absorbs excess oil",
      "Refines skin texture"
    ],
    usage: "Apply a thin layer 1-2 times per week. Leave for 10-15 minutes, then rinse.",
    image: "/src/assets/mask.jpg",
    suitableFor: {
      skinTypes: ["Oily", "Combination"],
      concerns: ["Acne", "Large Pores", "Excess Oil"]
    }
  },
  {
    id: "rich-cream",
    name: "Rich Nourishing Cream",
    description: "Deeply moisturizing cream for intense hydration and barrier repair.",
    benefits: [
      "Long-lasting hydration",
      "Strengthens skin barrier",
      "Reduces flakiness"
    ],
    usage: "Apply to clean skin morning and night. Can be used as an overnight mask.",
    image: "/src/assets/moisturizer.jpg",
    suitableFor: {
      skinTypes: ["Dry", "Sensitive"],
      concerns: ["Dryness", "Flakiness", "Sensitivity"]
    }
  },
  {
    id: "salicylic-cleanser",
    name: "Salicylic Acid Cleanser",
    description: "Exfoliating cleanser that unclogs pores and prevents breakouts.",
    benefits: [
      "Prevents acne",
      "Exfoliates dead skin",
      "Reduces inflammation"
    ],
    usage: "Use once daily in the evening. Massage onto wet skin and rinse thoroughly.",
    image: "/src/assets/cleanser.jpg",
    suitableFor: {
      skinTypes: ["Oily", "Combination"],
      concerns: ["Acne", "Large Pores", "Excess Oil"]
    }
  }
];

export function getRecommendations(skinType: string, concerns: string[]): Product[] {
  return products.filter(product => {
    const skinTypeMatch = product.suitableFor.skinTypes.includes(skinType) || 
                          product.suitableFor.skinTypes.includes("All");
    const concernMatch = concerns.some(concern => 
      product.suitableFor.concerns.includes(concern)
    );
    
    return skinTypeMatch && concernMatch;
  });
}
