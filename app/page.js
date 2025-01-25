import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1 xl:pt-[5.5rem]">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
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
      <section className="container px-4 py-10 mx-auto">
        <div>
          <div className="text-center p-5">
            <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
            <p className="text-lg text-gray-600 mb-5">
              Find the perfect plan that fits your needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-around p-5">
            <div className="border border-gray-300 rounded-lg p-5 m-2 text-center flex-1 min-w-[250px] transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold">Basic</h2>
              <p className="text-2xl font-semibold">$10/month</p>
              <ul className="list-disc list-inside">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
            <div className="border border-gray-300 bg-blue-50 rounded-lg p-5 m-2 text-center flex-1 min-w-[250px] transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold">Standard</h2>
              <p className="text-2xl font-semibold">$20/month</p>
              <ul className="list-disc list-inside">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Choose Plan
              </Button>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 m-2 text-center flex-1 min-w-[250px] transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-2xl font-semibold">$30/month</p>
              <ul className="list-disc list-inside">
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
    </main>
  );
}
