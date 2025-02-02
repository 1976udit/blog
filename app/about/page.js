// components/About.js

import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.jpg" // Ensure you have a profile.jpg in your public folder
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold mt-4">Udit Tyagi</h1>
        <p className="text-gray-600 mt-2 text-center">
          I am a passionate web developer with experience in building dynamic
          and responsive websites using modern technologies.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside mt-2">
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
            <h3 className="text-lg font-bold">Project One</h3>
            <p className="text-gray-600 mt-2">
              A brief description of the project goes here.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-lg font-bold">Project Two</h3>
            <p className="text-gray-600 mt-2">
              A brief description of the project goes here.
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Problem Solving</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-bold">LeetCode Challenges</h3>
          <p className="text-gray-600 mt-2">
            I regularly solve problems on LeetCode to enhance my problem-solving skills. Here are some of my recent challenges:
          </p>
          <ul className="list-disc list-inside mt-2">
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