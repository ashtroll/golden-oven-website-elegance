
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold text-bakery-brown">
            Artisan<span className="text-bakery-gold">Bakery</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection("home")} className="nav-link cursor-pointer">Home</a>
          <a onClick={() => scrollToSection("story")} className="nav-link cursor-pointer">Our Story</a>
          <a onClick={() => scrollToSection("products")} className="nav-link cursor-pointer">Products</a>
          <a onClick={() => scrollToSection("gallery")} className="nav-link cursor-pointer">Gallery</a>
          <a onClick={() => scrollToSection("contact")} className="nav-link cursor-pointer">Contact</a>
          <Button
            variant="default"
            className="bg-bakery-gold hover:bg-bakery-brown text-white font-raleway"
            onClick={() => scrollToSection("order")}
          >
            Order Online
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a onClick={() => scrollToSection("home")} className="nav-link cursor-pointer">Home</a>
            <a onClick={() => scrollToSection("story")} className="nav-link cursor-pointer">Our Story</a>
            <a onClick={() => scrollToSection("products")} className="nav-link cursor-pointer">Products</a>
            <a onClick={() => scrollToSection("gallery")} className="nav-link cursor-pointer">Gallery</a>
            <a onClick={() => scrollToSection("contact")} className="nav-link cursor-pointer">Contact</a>
            <Button
              variant="default"
              className="bg-bakery-gold hover:bg-bakery-brown text-white font-raleway"
              onClick={() => scrollToSection("order")}
            >
              Order Online
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
