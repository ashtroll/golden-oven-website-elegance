
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ProductCategoryProps {
  title: string;
  description?: string;
  products: Product[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  title,
  description,
  products,
}) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">{title}</h2>
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
