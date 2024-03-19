import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import QuestionTimer from './QuestionTimer.jsx';
/**
 * Responsible to show a question at a time on the screen
 * @return {JSX.Element}
 */
export default function Question({question, onAnswerSelect, onSkipQuestion}) {
  const questionTime = 10000;
  return (
    <div id="question">
      <QuestionTimer
        key={question.id}
        maxTime={questionTime}
        skipQuestion={onSkipQuestion}
      />
      <h2>{question.text}</h2>
      <Answers options={question.answers} onSelect={onAnswerSelect} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
  onAnswerSelect: PropTypes.func,
  onSkipQuestion: PropTypes.func,
};
