"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { loginAction } from "@/actions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = async () => {
    console.log('entered.........................')
    await loginAction();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span>Logo</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form action={()=>handleLogin()}>
              <button className="text-gray-800 hover:text-gray-600">
                Login
              </button>
            </form>
            <div className="relative">
              <button className="text-gray-800 hover:text-gray-600">
                <ShoppingCart />
              </button>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form action={()=>handleLogin()}>
              <button
                type="submit"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Login
              </button>
            </form>
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
