import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-6">
      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-secondary">
        Oops! Page not found.
      </h2>
      <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="btn btn-primary px-8 py-3 text-white font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-10 opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-40 mx-auto text-primary/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12h6m2 0a2 2 0 00-2-2H9a2 2 0 000 4h6a2 2 0 002-2zm-6 8a8 8 0 118-8 8 8 0 01-8 8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
