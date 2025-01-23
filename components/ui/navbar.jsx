// components/Navbar.jsx
"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ModeToggle } from "../theme-btn";

const Navbar = () => {

  return (
    <nav className="bg-white/30 p-4 flex justify-between sticky top-0 border-b backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'> <div className="text-blue-300 text-lg font-bold transition-colors duration-300">BlogIt</div> </Link>
        <div className="hidden text-blue-300 md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-blue-400 hover:underline transition-colors duration-300 ease-in-out">Home</Link>
          <Link href="/about" className="hover:text-blue-400 hover:underline transition-colors duration-300 ease-in-out">About</Link>
          <Link href="/blog" className="hover:text-blue-400 hover:underline transition-colors duration-300 ease-in-out">Blog</Link>
          <Link href="/contact" className="hover:text-blue-400 hover:underline transition-colors duration-300 ease-in-out">Contact</Link>
          <div className="flex items-center gap-2">
            <Button className="mx-1 text-blue-300 text-xs transition-colors duration-300">Sign Up</Button>
            <Button className="mx-1 text-blue-300 text-xs transition-colors duration-300">Login</Button>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <div className=" text-xl" > ☰ </div>
            </SheetTrigger>
            <SheetContent className="w-64">
              <SheetHeader className="flex items-center justify-between">
                <SheetTitle className="font-bold my-4">BlogIt</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 justify-center items-center">
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/blog" className="hover:text-gray-400">Blog</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                    <div>
                      <Button className="mx-1 text-xs">Sign Up</Button>
                      <Button className="mx-1 text-xs">Login</Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
