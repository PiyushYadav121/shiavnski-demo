import React from "react";

// Dummy data for blogs (replace with actual data)
const blogs = [
  {
    id: 1,
    title: "Microservices Architecture",
    imageUrl: "/blog1.jpg",
    excerpt:
      "Discussing the benefits, challenges, and best practices in deploying microservices with real-time case studies.",
  },
  {
    id: 2,
    title: "Design Patterns in Java Spring Boot",
    imageUrl: "/blog2.png", // replace with actual image path
    excerpt:
      "An in-depth guide on implementing various design patterns in Java Spring Boot applications.",
  },
  {
    id: 3,
    title: "Building APIs with Python FastAPI",
    imageUrl: "/blog3.png", // replace with actual image path
    excerpt: "Exploring FastAPI for creating robust, scalable APIs in Python.",
  },
  {
    id: 4,
    title: "Modern Web Development with Node.js and Express.js",
    imageUrl: "/blog4.jpeg", // replace with actual image path
    excerpt:
      "How to build efficient, scalable web applications using Node.js and Express.js.",
  },
  {
    id: 5,
    title: "Introduction to Docker and Kubernetes",
    imageUrl: "/blog5.jpg", // replace with actual image path
    excerpt:
      "A comprehensive guide on containerization with Docker and orchestration with Kubernetes.",
  },
  {
    id: 6,
    title: "OAuth 2.0, Okta, and Keycloak SAML Integration",
    imageUrl: "/blog6.jpg", // replace with actual image path
    excerpt:
      "Best practices for implementing secure authentication and authorization.",
  },
  {
    id: 7,
    title: "Frontend Development with React.js and Angular.js",
    imageUrl: "/blog7.png", // replace with actual image path
    excerpt:
      " Comparing React.js and Angular.js for building dynamic, responsive web applications.",
  },
];

const BlogSection = () => {
  return (
    <div className="py-24 bg-[#E2E2E2]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-16 text-center">
            Latest <span style={{ color: "#A727CE" }}>Blogs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
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
                    href="#"
                    className="text-[#A727C6] hover:text-[#1e1e1e] font-medium transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
