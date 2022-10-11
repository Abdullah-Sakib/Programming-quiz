import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  const { logo, name, questions } = quizData.data;
  return (
    <div className="bg-yellow-50">
      <div className="flex justify-center items-center py-5">
        <img src={logo} className="w-12 mr-3 bg-black rounded-xl " alt="" />
        <h2 className="text-3xl font-semibold  text-black">
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
