import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
export default async function Page({ params }) {

    const filepath = `./content/${params.slug}.md`;

    if(!fs.existsSync(filepath)) { 
      notFound();
      return 
    }

    const file = fs.readFileSync(filepath, "utf-8");
    const {content, data } = matter(file);


  return (
   <div className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg mt-5">
  <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 my-4">
    {data.title}
  </h1>
  <p className="text-base mb-2 border-l-4 border-gray-500 dark:border-gray-400 pl-3 italic">
    &quot;{data.description}&quot;
  </p>
  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
    by <span className="font-medium font-serif italic">{data.author}</span>{" "}
    | <span className="font-medium">{data.date}</span>
  </p>
  <div
    dangerouslySetInnerHTML={{ __html: content }}
    className="prose dark:prose-dark"
  ></div>
  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Comments</h2>
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-4">
      <p className="text-gray-700 dark:text-gray-300">{data.comment}</p>
    </div>
  </div>
</div>
  );
}
