export default async function Page({ params }) {
    const blog = {
      title: "Understanding JavaScript Objects",
      author: "Jane Doe",
      discripton:"This is a sample blog discription on Javascript objects",
      datePublished: "2023-10-01",
      comment: "Great article! Very informative.",
      content: "this is the contant about the javascript working as welle as the strong and weak points of the javascript"
    };
  return (
  <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-5">
    <h1 className="text-4xl font-extrabold text-gray-800 my-4">{blog.title}</h1>
    <p className="text-gray-500 text-sm mb-4">
      by <span className="font-medium font-serif italic">{blog.author}</span> | <span className="font-medium">{blog.datePublished}</span>
    </p>
    <p className="text-base mb-2 border-l-4 border-gray-500 pl-3 italic">"{blog.discripton}"</p>
    <div dangerouslySetInnerHTML={{__html : blog.content}} className="prose"></div>
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <p className="text-gray-700">{blog.comment}</p>
      </div>
    </div>
</div>
);
}
