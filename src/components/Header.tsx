"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CartCount from "./CartCount";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 shadow-2xl border-b-4 border-amber-500 relative z-50">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Logo" width={56} height={56} />
            <span className="hidden sm:block font-black text-xl text-amber-100">
              Fresh Tropics
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-6 text-amber-100 font-semibold text-sm">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/comparison">Compare</Link>
            <Link href="/videos">Videos</Link>
          </nav>

          {/* CART + MOBILE BUTTON */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="flex items-center gap-2 px-4 py-2 bg-amber-300 text-emerald-900 font-bold rounded-full"
            >
              🛒 Cart
              <CartCount />
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col gap-1.5 p-2"
            >
              <span className="w-6 h-0.5 bg-amber-100"></span>
              <span className="w-6 h-0.5 bg-amber-100"></span>
              <span className="w-6 h-0.5 bg-amber-100"></span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-20 left-0 right-0 bg-gradient-to-b from-emerald-800 to-emerald-700 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col px-4 py-6 gap-4 text-amber-100 font-semibold">
          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          <Link href="/shop" onClick={closeMobileMenu}>Shop</Link>
          <Link href="/comparison" onClick={closeMobileMenu}>Compare</Link>
          <Link href="/videos" onClick={closeMobileMenu}>Videos</Link>
          <Link href="/about" onClick={closeMobileMenu}>About</Link>
          <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
        </nav>
      </div>

      {/* BACKDROP */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </header>
  );
}
