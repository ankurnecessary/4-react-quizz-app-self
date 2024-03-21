import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import QuestionTimer from './QuestionTimer.jsx';
/**
 * Responsible to show a question at a time on the screen
 * @return {JSX.Element}
 */
export default function Question({question, onAnswerSelect, onSkipQuestion}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });
  let questionTime = 10000;

  if (answer.selectedAnswer !== '') {
    questionTime = 1000;
  }

  if (answer.isCorrect !== null) {
    questionTime = 2000;
  }

  /**
   * To set the state of selected answer to handle it cosmetically
   *
   * @param {string} answer
   */
  function handleAnswerSelection(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === question.answers[0] ? 'correct' : 'wrong',
      });
      setTimeout(() => {
        onAnswerSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer !== '' && answer.isCorrect !== null) {
    answerState = answer.isCorrect;
  } else if (answer.selectedAnswer !== '') {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={questionTime}
        maxTime={questionTime}
        skipQuestion={answer.selectedAnswer === '' ? onSkipQuestion : null}
        answerState={answerState}
      />
      <h2>{question.text}</h2>
      <Answers
        selectedAnswer={answer.selectedAnswer}
        options={question.answers}
        onSelect={handleAnswerSelection}
        answerState={answerState}
      />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
  onAnswerSelect: PropTypes.func,
  onSkipQuestion: PropTypes.func,
};
