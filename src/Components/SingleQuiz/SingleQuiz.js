import React from "react";

const SingleQuiz = ({ question }) => {
  const {options} = question;
  return (
    <div className="border-2 rounded-lg w-2/3 mx-auto my-9 p-8 bg-blue-300">
      <h3 className="text-xl ">{question.question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 text-start mt-4">

        {
          options.map((option, idx) => <label key={idx} className="border rounded-lg bg-white py-2 mb-5 mt-3" htmlFor={option}>
            <input className="mx-2" type="radio" name={options} id={option} value={option}  />
            {option}</label> )
        }

      </div>
    </div>
  );
};

export default SingleQuiz;
