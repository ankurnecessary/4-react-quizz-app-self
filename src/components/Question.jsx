import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import QuestionTimer from './QuestionTimer.jsx';
/**
 * Responsible to show a question at a time on the screen
 * @return {JSX.Element}
 */
export default function Question({question}) {
  return (
    <div id="question">
      <QuestionTimer />
      <h2>{question.text}</h2>
      <Answers options={question.answers} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};
