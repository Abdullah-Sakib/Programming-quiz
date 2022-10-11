import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useLoaderData();
  
  return (
    <div>
      <div className="lg:relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="lg:relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="inline-block text-blue-500">
                Programming Quiz
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              “Perfection is achieved not when there is nothing more to add, but
              rather when there is nothing more to take away.” - Antoine de
              Saint-Exupery
            </p>
          </div>
        </div>
      </div>

      {/* Quiz topics section  */}

      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

            {
              topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
