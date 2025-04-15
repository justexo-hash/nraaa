"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-yukon-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-biotech-blue mb-4">404</h1>
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-biotech-blue to-biotech-teal mb-8"></div>
        <h2 className="text-3xl font-semibold text-yukon-gray mb-6">Page Not Found</h2>
        <p className="text-xl mb-10 max-w-lg mx-auto">
          Looks like our advanced cloning process couldn't recreate this page. It may have gone extinct, or never existed.
        </p>
        <a href="/" className="px-6 py-3 bg-biotech-teal text-white font-semibold rounded-md hover:bg-biotech-dark transition-colors duration-300 transform hover:scale-105">
          Return Home
        </a>
      </div>
    </div>
  );
} 