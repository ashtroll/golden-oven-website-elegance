
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-bakery-cream flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-bakery-brown mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-playfair">
            We couldn't find this page
          </p>
          <p className="text-gray-600 mb-12 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-bakery-gold hover:bg-bakery-brown text-white font-raleway">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
