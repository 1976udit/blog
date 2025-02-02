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
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ModeToggle } from "../theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  useEffect(() => {
    setProgress(30)
    setTimeout(() => {
      setProgress(70)
    }, 100)
    setTimeout(() => {
      setProgress(100)
    }, 400)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 600)
  }, [])


  return (
    <nav className="p-4 flex justify-between sticky top-0 border-b backdrop-blur-md z-10">
      <LoadingBar
        color="#C084FC"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'> <div className="text-lg font-bold transition-colors duration-300">BlogIt</div> </Link>
        <div className="hidden  md:flex space-x-4 items-center">
          <Link href="/" className=" hover:scale-110 transition-transform duration-300 hover:semi-bold">Home</Link>
          <Link href="/about" className=" hover:scale-110 transition-transform duration-300 hover:semi-bold">About</Link>
          <Link href="/blog" className="hover:scale-110 transition-transform duration-300 hover:semi-bold">Blog</Link>
          <Link href="/contact" className="hover:scale-110 transition-transform duration-300 hover:semi-bold">Contact</Link>
          <div className="flex items-center gap-3 dark:bg-black dark:text-white  justify-center">
            <ModeToggle />
            <ClerkProvider>
              <div>
                <div>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </ClerkProvider>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <div className=" text-xl" > ☰ </div>
            </SheetTrigger>
            <span className="mx-2"> <ModeToggle /> </span>
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
