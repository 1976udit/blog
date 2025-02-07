// components/About.js

import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-black shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4">Udit Tyagi</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">
          I am a passionate web developer with experience in building dynamic
          and responsive websites using modern technologies.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc  dark:text-gray-400 list-inside mt-2">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-lg font-bold  dark:text-gray-400">
              CODER CAFE.
            </h3>
            <p className="text-gray-600 mt-2">
              It is a landing page of a coffee show which has amazing animations
              os framer-motion
            </p>
            <Link
              href="https://coffeeshdev.vercel.app/"
              className="text-blue-800"
            >
              Live Page
            </Link>
            {/* <a href="" /> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-lg font-bold  dark:text-gray-400">StartUp.</h3>
            <p className="text-gray-600 mt-2">
              It is a Next.js web-application where user can publish there
              startups on internet and grow there ideas with realtime views.
            </p>
            <Link
              href="https://github.com/1976udit/StartUp"
              className="text-blue-800"
            >
              Github Link
            </Link>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Problem Solving</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-bold dark:text-gray-400">
            <Link href="https://leetcode.com/u/Udit_Tyagi/">
              LeetCode Challenges <SearchIcon />
            </Link>
          </h3>
          <p className="text-gray-600  mt-2">
            I regularly solve problems on LeetCode to enhance my problem-solving
            skills. Here are some of my recent challenges:
          </p>
          <ul className="list-disc list-inside dark:text-gray-600 mt-2">
            <li>Two Sum</li>
            <li>Longest Substring Without Repeating Characters</li>
            <li>Median of Two Sorted Arrays</li>
            {/* Add more challenges as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;