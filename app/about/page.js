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
    <div className="max-w-screen-md mx-auto">
      <Carousel className="relative">
        <CarouselContent className="overflow-hidden flex">
          <CarouselItem className="flex justify-center items-center flex-shrink-0 w-full">
            <img
              className="w-full h-1/2-screen object-cover"
              src="https://images.pexels.com/photos/25384797/pexels-photo-25384797/free-photo-of-rugged-rocks-of-the-ocean-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center flex-shrink-0 w-full">
            <img
              className="w-full h-1/2-screen object-cover"
              src="https://images.pexels.com/photos/25384797/pexels-photo-25384797/free-photo-of-rugged-rocks-of-the-ocean-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center flex-shrink-0 w-full">
            <img
              className="w-full h-1/2-screen object-cover"
              src="https://images.pexels.com/photos/25384797/pexels-photo-25384797/free-photo-of-rugged-rocks-of-the-ocean-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700" />
      </Carousel>
    </div>
  );
}

export default About