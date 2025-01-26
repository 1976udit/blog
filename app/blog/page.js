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


const BlogPage = () => {
  return (
    <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <div key={post.slug} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              by {post.author} | {post.date}
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">{post.description}</p>
            <Button className="mt-2 bg-purple-400 dark:bg-purple-600" asChild>
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </div>
        ))}
        </div>
    </div>
  )};  
export default BlogPage;
