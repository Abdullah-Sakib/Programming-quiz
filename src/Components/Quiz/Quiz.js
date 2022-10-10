import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  const { logo, name, questions } = quizData.data;
  console.log(questions);
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <img src={logo} className="w-12 mr-3 bg-black rounded-[50%]" alt="" />
        <h2 className="text-3xl font-semibold  text-blue-500">
          {name} Quiz
        </h2>
      </div>

        {
          questions.map((question, idx) => <SingleQuiz key={idx} question={question}></SingleQuiz>)
        }

    </div>
  );
};

export default Quiz;
