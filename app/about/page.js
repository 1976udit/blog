import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          We are a team of passionate developers dedicated to building
          high-quality web applications. Our mission is to deliver exceptional
          digital experiences that empower users and drive business success.
        </p>
        <p className="text-gray-600">
          Our expertise spans across various technologies, and we are committed
          to continuous learning and improvement.
        </p>
      </div>
    </div>
  );
}

export default About