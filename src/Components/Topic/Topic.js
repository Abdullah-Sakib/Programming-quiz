import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div className="p-2">
        <img src={logo} alt="" className="bg-black rounded-xl" />
        </div>
        <div className="p-5 flex justify-between items-center border border-t-0">
          <div className="text-left">
            <h3 className="text-2xl font-semibold mr-5">{name}</h3>
            <p className="mt-3 font-semibold">Total Quiz : {total}</p>
          </div>
          <Link to={`/quiz/${id}`}>
            <button className="px-4 rounded text-white font-semibold py-2 bg-blue-500 hover:bg-blue-700">
            Start Quiz  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
