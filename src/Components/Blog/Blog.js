import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-yellow-50">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="sm:relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span >Programming Quiz Blogs</span>
            </span>{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            “Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away.” - Antoine de
            Saint-Exupery
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2 text-start">
          <div className="border-2 border-black rounded-lg p-5">
            <p className="mb-4 text-xl font-medium">
              What is the purpose of react router?
            </p>
            <p className="text-gray-700">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
              <br />
              <br />
              At its heart, React Router is a state container for the current
              location , or URL. It keeps track of the location and renders
              different Routes as it changes, and it also gives you tools to
              update the location using Links and the history API.
            </p>
          </div>

          <div className="border-2 border-black rounded-lg p-5">
            <p className="mb-4 text-xl font-medium">
              How does context API works?
            </p>
            <p className="text-gray-700">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
              <br />
              <br />
              React's context allows us to share information to any component, by storing it in a central place and allowing access to any component that requests it (usually we are only able to pass data from parent to child via props).
            </p>
          </div>

          <div className="border-2 border-black rounded-lg p-5">
            <p className="mb-4 text-xl font-medium">
              What is useRef hook in react?
            </p>
            <p className="text-gray-700">
              The useRef Hook allows us to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
              <br />
              <br />
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument ( initialValue ). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
