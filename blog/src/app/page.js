import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Blog!</h2>
        <p className="text-lg mb-8">Discover amazing stories and insights.</p>
        <Link
          href={"/blogs"}
          className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          Explore Blog
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
