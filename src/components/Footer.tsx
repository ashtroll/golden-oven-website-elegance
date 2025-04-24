
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bakery-taupe text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-bakery-gold">
              Artisan Bakery
            </h3>
            <p className="mb-4 text-sm leading-relaxed opacity-80">
              Handcrafted breads and pastries made with love, tradition, and the
              finest ingredients. Bringing the authentic taste of artisanal baking to
              your table since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-bakery-gold">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-bakery-gold">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Bakery Street, Flour City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@artisanbakery.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-bakery-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-bakery-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bakery-gold transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bakery-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bakery-gold transition-colors">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bakery-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Artisan Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
