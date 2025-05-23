
import React from "react";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  category,
}) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3} className="w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1609587312208-cea54be969e7?auto=format&fit=crop&q=80&w=1740"; // Fallback image
              console.log(`Failed to load image for ${name}, using fallback`);
            }}
          />
        </AspectRatio>
        {category && (
          <span className="absolute top-4 right-4 bg-bakery-gold text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-bakery-brown font-semibold">{price}</span>
          <Button
            variant="outline"
            className="border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-white transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
