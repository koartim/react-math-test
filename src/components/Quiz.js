import React from 'react';

class Quiz extends React.Component {

  state = {
    quiz: {},
    index: 0,
    numOfQuestions: 0,
    score: 0,
    answers: [],
    completed: false
  }

  render() {
    return(
      <div>
        <h1>Quiz</h1>
      </div>
    )
  }
}

export default Quiz;
