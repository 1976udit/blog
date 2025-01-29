"use client"
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React from "react";


export default function Home() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "coding",
        "Web Development",
        "Machine Learning",
        "Data Science",
        "Artificial Intelligence",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className="flex-1 xl:pt-[5.5rem]">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free source</span> for community
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* // section 2 */}
      <section className="container bg-gray-100 dark:bg-gray-800 px-4 py-10 mx-auto">
        <div>
          <div className="text-center p-2">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">
              Find the perfect plan that fits your needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-around p-5">
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 m-2 text-center flex-1 min-w-[250px] transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Basic
              </h2>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                $10/month
              </p>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Choose Plan
              </Button>
            </div>
            <div className="border border-blue-500 dark:border-blue-700 rounded-lg p-5 m-2 text-center flex-1 min-w-[250px] transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Standard
              </h2>
              <span className="bg-purple-500 text-white text-xs font-bold uppercase rounded-full px-2 py-1 absolute top-2 right-2 animate-pulse">
                Bestseller
              </span>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                $20/month
              </p>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Choose Plan
              </Button>
            </div>
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 m-2 text-center flex-1 min-w-[250px] transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Premium
              </h2>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                $30/month
              </p>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section  */}
      <section className="py-10 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Top Blogs
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 dark:bg-gray-700 flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog 1"
              className="rounded-t-lg mb-4 h-48"
            />
            <h3 className="text-l font-semibold mb-2 text-gray-900 dark:text-white text-center">
              Understanding React Hooks
            </h3>
            <p className="text-gray-600 mb-4 dark:text-gray-300 text-center">
              A deep dive into React Hooks and how to use them effectively.
            </p>
            <span className="text-gray-500 text-sm dark:text-gray-400">
              March 15, 2023
            </span>
            <div className="mt-4">
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Read More
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 dark:bg-gray-700 flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog 2"
              className="rounded-t-lg mb-4 h-48"
            />
            <h3 className="text-l font-semibold mb-2 text-gray-900 dark:text-white text-center">
              CSS Grid vs Flexbox
            </h3>
            <p className="text-gray-600 mb-4 dark:text-gray-300 text-center">
              Comparing CSS Grid and Flexbox for layout design.
            </p>
            <span className="text-gray-500 text-sm dark:text-gray-400">
              April 10, 2023
            </span>
            <div className="mt-4">
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Read More
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 dark:bg-gray-700 flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg"
              alt="Blog 3"
              className="rounded-t-lg mb-4 h-48"
            />
            <h3 className="text-l font-semibold mb-2 text-gray-900 dark:text-white text-center">
              JavaScript ES2023 Features
            </h3>
            <p className="text-gray-600 mb-4 dark:text-gray-300 text-center">
              Exploring the new features introduced in ES2023.
            </p>
            <span className="text-gray-500 text-sm dark:text-gray-400">
              May 5, 2023
            </span>
            <div className="mt-4">
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer className="bg-gray-800 text-white py-8 dark:bg-gray-900 dark:text-gray-200 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p>Email: udit007tyagi@gmail.com</p>
              <p>Phone: (+91) 9650310831</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 dark:hover:text-blue-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 dark:hover:text-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 dark:hover:text-pink-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 dark:hover:text-blue-600"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
