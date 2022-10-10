import React from 'react';

const SingleQuiz = ({question}) => {
  console.log(question);
  return (
    <div>
      <h3>{question.correctAnswer}</h3>
    </div>
  );
};

export default SingleQuiz;