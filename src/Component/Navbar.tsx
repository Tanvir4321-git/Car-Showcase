
'use client';

import { useState } from 'react';
import Link from 'next/link';

  const Navbar=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
  const links=<>
  <Link href="/" className="text-white hover:text-[#fb2c36] text-sm transition-colors">Home</Link>
        <Link href="/cars" className="text-white hover:text-[#fb2c36] text-sm transition-colors">Cars</Link>
        <Link href="/brands" className="text-white hover:text-[#fb2c36] text-sm transition-colors">Brands</Link>
        <Link href="/deals" className="text-white hover:text-[#fb2c36] text-sm transition-colors">Deals</Link>
        <Link href="/contact" className="text-white hover:text-[#fb2c36] text-sm transition-colors">Contact</Link>
  </>

  return (
    <div className=' z-50  '>

    <nav className="max-w-11/12 mx-auto  h-16 flex items-center justify-between">

      {/* Logo */}
      <Link href="/" className="text-white text-2xl font-bold tracking-widest">
        DRIVE<span className="text-red-500">Z</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {links}
      </div>

      {/* CTA Button */}
      <a href='#browse' className="hidden md:block  bg-red-500 hover:bg-transparent hover:border-red-500 hover:border text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
        Browse Cars
      </a>

      {/* Hamburger */}
      <button className="md:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black  border-t  border-white/10 flex flex-col p-4 gap-3 md:hidden">
        {links}
          <a href='#browse'className="mt-2 bg-red-500 text-white text-sm font-semibold py-2 rounded-lg">
            Browse Cars
          </a>
        </div>
      )}

    </nav>
    </div>
  );
}

export default  Navbar