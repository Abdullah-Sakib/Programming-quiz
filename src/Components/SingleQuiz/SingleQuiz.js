import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import swal from "sweetalert";

const SingleQuiz = ({ question }) => {
  const { options, correctAnswer } = question;
  const radioHandler = (value) => {
    if (value === correctAnswer) {
      swal("Correct Answer", "Congratulations!", "success");
    } else {
      swal("Wrong Answer", "Try again", "error");
    }
  };
  const showCorrectAnswer = () => {
    swal("Correct Answer is", `${correctAnswer}`);
  };
  return (
    <div className="border-2 rounded-lg w-2/3 mx-auto my-9 p-8 bg-yellow-300">
      <div className="flex flex-col md:flex-row">
          <h3 className="text-lg md:text-xl md:grow">{question.question}</h3>
        <button className="hover:text-gray-900" onClick={showCorrectAnswer}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 text-start mt-4">
        {options.map((option, idx) => (
          <label
            key={idx}
            className="border rounded-lg bg-white py-2 p-1 mb-5 mt-3"
            htmlFor={option}
          >
            <input
              className="mx-2"
              type="radio"
              name={options}
              id={option}
              value={option}
              onChange={(e) => radioHandler(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
