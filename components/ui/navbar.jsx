// components/Navbar.jsx
"use client"
import { Button } from "@/components/ui/button"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-400 text-white p-4 flex justify-between items-center backdrop-blur sticky top-0 bg-background-50">
      <Link href='/'><div className="text-lg font-bold">BlogIt</div></Link>
      <div className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
      <button className="md:hidden text-xl" onClick={toggleMenu}>
        ☰
      </button>
      <Button variant="outline" className="text-gray-400">Button</Button>

    </nav>
  );
};

export default Navbar;
