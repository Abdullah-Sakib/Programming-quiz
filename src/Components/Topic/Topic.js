import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="overflow-hidden rounded-xl border-none transition-shadow duration-300 bg-yellow-50  shadow-xl">
        <div className="p-2">
        <img src={logo} alt="" className="bg-black rounded-xl" />
        </div>
        <div className="p-5 flex justify-between items-center ">
          <div className="text-left">
            <h3 className="text-2xl font-semibold mr-5">{name}</h3>
            <p className="mt-3 font-semibold">Total Quiz : {total}</p>
          </div>
          <Link to={`/quiz/${id}`}>
            <button className="px-4 rounded text-white font-semibold py-2 bg-yellow-400 hover:bg-yellow-600" onClick={window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
            Start Quiz  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
