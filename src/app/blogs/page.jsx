import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className='p-24'>
      {blogs.map((blog) => (
        <div key={blog.slug} className='border-2 p-12'>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <button className='bg-red-400 p-3'>
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

const blogs = [
  {
    slug: "introduction-to-react",
    title: "Introduction to React",
    description:
      "A beginner's guide to getting started with React, including installation and basic concepts.",
  },
  {
    slug: "mastering-css-grid",
    title: "Mastering CSS Grid",
    description:
      "Learn how to create complex layouts easily with CSS Grid, complete with examples and use cases.",
  },
  {
    slug: "building-a-restful-api-with-nodejs",
    title: "Building a RESTful API with Node.js",
    description:
      "Step-by-step tutorial on how to build a RESTful API using Node.js and Express.js.",
  },
  {
    slug: "getting-started-with-mongodb",
    title: "Getting Started with MongoDB",
    description:
      "An introduction to MongoDB, covering the basics of setting up a database, CRUD operations, and more.",
  },
  {
    slug: "responsive-web-design-with-tailwind-css",
    title: "Responsive Web Design with Tailwind CSS",
    description:
      "Learn how to create responsive web designs quickly and efficiently using Tailwind CSS.",
  },
  {
    slug: "authentication-with-firebase-auth",
    title: "Authentication with Firebase Auth",
    description:
      "A guide on implementing user authentication in your web applications using Firebase Auth.",
  },
  {
    slug: "optimizing-react-app-performance",
    title: "Optimizing React App Performance",
    description:
      "Tips and best practices for optimizing the performance of your React applications.",
  },
  {
    slug: "state-management-in-react-with-redux",
    title: "State Management in React with Redux",
    description:
      "Learn how to manage state in your React applications using Redux, including setup and common patterns.",
  },
  {
    slug: "deploying-your-web-app-with-heroku",
    title: "Deploying Your Web App with Heroku",
    description:
      "A comprehensive guide on how to deploy your web applications to Heroku, from start to finish.",
  },
  {
    slug: "creating-beautiful-animations-with-framer-motion",
    title: "Creating Beautiful Animations with Framer Motion",
    description:
      "Learn how to create stunning animations in your React applications using Framer Motion.",
  },
];

export default BlogsPage;
