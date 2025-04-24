import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCategory from "../components/ProductCategory";
import Testimonial from "../components/Testimonial";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, MapPin } from "lucide-react";

const Index = () => {
  // Sample product data
  const breads = [
    {
      id: 1,
      name: "Artisan Sourdough",
      description: "Traditional sourdough with a crispy crust and soft interior.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=1932",
    },
    {
      id: 2,
      name: "Multigrain Loaf",
      description: "Hearty loaf made with seven ancient grains and seeds.",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1586444248879-9a345476570d?auto=format&fit=crop&q=80&w=1932",
    },
    {
      id: 3,
      name: "Baguette",
      description: "Traditional French baguette with crisp crust and light, airy interior.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=1926",
    },
  ];

  const pastries = [
    {
      id: 4,
      name: "Butter Croissant",
      description: "Flaky, buttery croissants made with premium French butter.",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1926",
    },
    {
      id: 5,
      name: "Almond Danish",
      description: "Sweet Danish pastry filled with almond cream and topped with sliced almonds.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=1935",
    },
    {
      id: 6,
      name: "Pain au Chocolat",
      description: "Chocolatey goodness wrapped in flaky, buttery pastry.",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1678369737946-7839b5a927ea?auto=format&fit=crop&q=80&w=1974",
    },
  ];

  const cakes = [
    {
      id: 7,
      name: "Classic Cheesecake",
      description: "Rich and creamy New York style cheesecake with a graham cracker crust.",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?auto=format&fit=crop&q=80&w=1974",
    },
    {
      id: 8,
      name: "Chocolate Ganache Cake",
      description: "Decadent chocolate cake covered in rich chocolate ganache.",
      price: "$32.50",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1989",
    },
    {
      id: 9,
      name: "Berry Tart",
      description: "Fresh seasonal berries atop vanilla custard in a buttery tart shell.",
      price: "$24.00",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1931",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The sourdough bread from this bakery is unlike anything I've ever tasted. The flavor profile is complex and the texture is perfect. It's become a weekly staple in our home.",
      author: "Sarah Johnson",
      role: "Local Food Critic"
    },
    {
      quote: "I ordered a custom birthday cake and was blown away by both the presentation and taste. Everyone at the party was asking where I got such an amazing cake!",
      author: "Michael Thompson",
      role: "Satisfied Customer"
    },
    {
      quote: "Their croissants transport me straight to Paris. Flaky, buttery, and absolutely perfect with my morning coffee. Worth every penny!",
      author: "Emma Rodriguez",
      role: "Pastry Enthusiast"
    }
  ];

  return (
    <div className="min-h-screen bg-bakery-cream">
      <Header />

      {/* Hero Section */}
      <section 
        id="home"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=2080')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Artisanal Baked Goods
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Handcrafted with love using traditional methods and premium ingredients
          </p>
          <Button 
            size="lg"
            className="bg-bakery-gold hover:bg-bakery-brown text-white font-raleway text-lg"
          >
            Order Now
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Artisan Bakery began with a simple passion for authentic baking. Founded in 2010 by master baker Thomas Laurent, our bakery carries forward centuries-old traditions while embracing innovative techniques.
              </p>
              <p className="mb-4 text-gray-700">
                We believe that exceptional baked goods require time, patience, and the finest ingredients. Our sourdough starters have been nurtured for years, giving our breads their distinctive flavor and character.
              </p>
              <p className="mb-6 text-gray-700">
                Today, our team of dedicated bakers continues this tradition, crafting each product by hand with meticulous attention to detail and an unwavering commitment to quality.
              </p>
              <Button variant="outline" className="border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-white">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&q=80&w=1776" 
                alt="Baker working with dough" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-bakery-gold p-4 rounded-lg shadow-lg">
                <p className="text-white font-playfair text-xl">Baking Since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-bakery-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Our Products</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover our range of handcrafted breads, pastries, and cakes, made fresh daily using traditional methods and the finest ingredients.
            </p>
          </div>

          <ProductCategory 
            title="Artisanal Breads" 
            description="Our breads are made using traditional fermentation methods, giving them distinctive flavors and textures."
            products={breads} 
          />
          
          <ProductCategory 
            title="French Pastries" 
            description="Delicate, flaky pastries made with premium European butter and masterful technique."
            products={pastries} 
          />
          
          <ProductCategory 
            title="Cakes & Desserts" 
            description="Beautiful cakes and desserts for special occasions or everyday indulgence."
            products={cakes} 
          />

          <div className="text-center mt-12">
            <Button className="bg-bakery-gold hover:bg-bakery-brown text-white font-raleway">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Gallery</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a visual journey through our bakery and discover the artistry behind our products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=1935",
              "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1936",
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1989",
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1972",
              "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?auto=format&fit=crop&q=80&w=1974",
              "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=1964",
              "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80&w=2080",
              "https://images.unsplash.com/photo-1484116021483-6e444d6bdbc3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2080",
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1609587312208-cea54be969e7?auto=format&fit=crop&q=80&w=1740"; // Fallback image
                    console.log(`Failed to load gallery image ${index + 1}, using fallback`);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-bakery-brown hover:text-bakery-gold transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-bakery-beige">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">What Our Customers Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our customers have to say about our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Visit Our Bakery</h2>
              <p className="mb-8 text-gray-700">
                We'd love to welcome you to our bakery. Come visit us to experience the aroma of freshly baked goods and enjoy a warm pastry with your favorite beverage.
              </p>

              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-bakery-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">123 Bakery Street, Flour City, FC 12345</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>Monday - Friday</div>
                  <div>7:00 AM - 7:00 PM</div>
                  <div>Saturday</div>
                  <div>7:00 AM - 5:00 PM</div>
                  <div>Sunday</div>
                  <div>8:00 AM - 3:00 PM</div>
                </div>
              </div>

              <Button className="bg-bakery-gold hover:bg-bakery-brown text-white font-raleway">
                Get Directions
              </Button>
            </div>
            
            <div className="h-[400px] lg:h-full rounded-lg overflow-hidden shadow-lg">
              {/* This would be a map component in a real implementation */}
              <img 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80&w=1974" 
                alt="Map of bakery location" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="order" className="bg-bakery-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              Join Our Bread Club
            </h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter to receive updates on seasonal specials, events, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-bakery-gold flex-grow max-w-sm"
              />
              <Button className="bg-bakery-gold hover:bg-opacity-90 text-white font-raleway px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
