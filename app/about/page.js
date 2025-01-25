
export default function About() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
  <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">About Us</h1>
  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center">
    We are a team of passionate developers dedicated to building amazing web applications.
    Our mission is to create user-friendly and efficient solutions that meet the needs of our clients.
  </p>
  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Our Values</h2>
    <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
      <li>Innovation</li>
      <li>Collaboration</li>
      <li>Integrity</li>
      <li>Excellence</li>
    </ul>
  </div>
</div>
  );
}