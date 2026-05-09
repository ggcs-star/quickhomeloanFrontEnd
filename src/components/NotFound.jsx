import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 text-center px-4">
      <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, the page you are looking for doesn't exist or is temporarily unavailable.
      </p>
      <Link to="/" className="w-full sm:w-auto px-4 lg:px-8 py-4 bg-black text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-800 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;