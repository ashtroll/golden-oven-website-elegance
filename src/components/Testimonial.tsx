
import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <svg
        className="h-8 w-8 text-bakery-gold opacity-50 mb-4"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-gray-600 italic mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-bakery-brown">{author}</p>
        {role && <p className="text-gray-500 text-sm">{role}</p>}
      </div>
    </div>
  );
};

export default Testimonial;
