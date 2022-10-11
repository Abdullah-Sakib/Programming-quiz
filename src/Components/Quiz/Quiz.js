import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

export const CorrectContext = createContext(0);

const Quiz = () => {
  const [correct, setCorrect] = useState([]);
  const [wrongAttemps, setWrongAttemps] = useState(0);
  const quizData = useLoaderData();
  const { logo, name, questions } = quizData.data;
  return (
    <CorrectContext.Provider value={[correct, setCorrect , wrongAttemps, setWrongAttemps]}>
    <div className="bg-yellow-50">
      <div className="flex justify-center items-center py-5">
        <img src={logo} className="w-12 mr-3 bg-black rounded-xl " alt="" />
        <h2 className="text-3xl font-semibold  text-black">{name} Quiz</h2>
      </div>

      <div className="  grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-5">
          {questions.map((question, idx) => (
            <SingleQuiz key={idx} question={question}></SingleQuiz>
          ))}
        </div>
        <div className="border mx-4 md:mx-0 my-9 rounded-lg p-5 bg-yellow-300">
          <div className="sticky top-4">
            <h2 className=" font-semibold mb-4 text-3xl">Results</h2>
            <p className="text-xl text-start">Correct Answers : {correct.length}</p>
            <p className="text-xl text-start my-3">Wrong Attempts : {wrongAttemps}</p>
          </div>
        </div>
      </div>
    </div>
    </CorrectContext.Provider>
  );
};

export default Quiz;
