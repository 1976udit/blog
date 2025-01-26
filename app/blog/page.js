import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const contentDir = fs.readdirSync("content","utf-8")
const blogs = contentDir.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`,"utf-8")
  const { data } = matter(fileContent)
  return data;
})

// gray-matter is a library that helps to parse object from markdown files


// const dummyData = [
//   {
//     title: "First Blog Post",
//     author: "John Doe",
//     description: "This is the description for the first blog post.",
//     date: "2023-10-01",
//     slug: "first-blog-post",
//     image:
//       "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
//   },
//   {
//     title: "Second Blog Post",
//     author: "Jane Smith",
//     description: "This is the description for the second blog post.",
//     date: "2023-10-02",
//     slug: "second-blog-post",
//     image:
//       "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
//   },
// ];

const BlogPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <div key={post.slug} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-600">
              by {post.author} | {post.date}
            </p>
            <p className="text-gray-800 mt-2">{post.description}</p>
            <Button className="mt-2 bg-purple-400" asChild>
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
