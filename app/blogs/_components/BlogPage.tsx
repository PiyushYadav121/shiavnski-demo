import { blogs } from "@/lib/constants/blogs";
import React from "react";

const BlogSection = () => {
  const introduction = {
    imageUrl: "/blog.jpg", // replace with actual image path
    heading: "Explore Our Blog Posts",
    paragraph:
      "Discover insightful articles covering a wide range of topics in technology and development. Whether you are interested in micro-services, API development, modern web technologies, or more, we have something for everyone.",
  };

  return (
    <div className=" bg-[#1E1E1E]">
      <div className="page_alignment">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <div className="flex flex-col md:flex-row items-center py-24">
            {/* Image */}
            <div className="md:w-1/2 md:pr-6">
              <img
                src={introduction.imageUrl}
                alt="Introduction Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Text Content */}
            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <div className="p-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E2E2E2] mb-4 ">
                  <span className="text-[#A727C6]">Explore</span>  Our Blog Posts
                </h2>
                <p className="text-[#E2E2E2]/80 mb-6">
                  {introduction.paragraph}
                </p>
                <a
                  href="#latest-blogs"
                  className="inline-block bg-[#A727C6] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#1e1e1e] transition duration-200"
                >
                  Read Our Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-[#E2E2E2] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              id="latest-blogs"
              className="text-4xl md:text-6xl lg:text-5xl font-bold mb-12 text-left"
            >
              Latest<span className="text-[#A727C6]"> Blogs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {blogs.slice(0, 7).map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-[1.01]"
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      {blog.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                    <a
                      href={blog.link}
                      className="text-[#A727C6] hover:text-[#1e1e1e] font-medium cursor-pointer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSection;
