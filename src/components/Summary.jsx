import React from 'react';
import PropTypes from 'prop-types';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';
/**
 * To depict the summary of the quiz attempted
 *
 * @return {JSX.Element}
 */
export default function Summary({answers}) {
  let {
    skippedAnswers,
    correctAnswers,
    wrongAnswers,
  } = answers.reduce((prev, currentAnswer, index) => {
    if (currentAnswer === null) {
      prev.skippedAnswers++;
    }

    if (currentAnswer === QUESTIONS[index].answers[0]) {
      prev.correctAnswers++;
    }

    return prev;
  }, {
    skippedAnswers: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  skippedAnswers = Math.round((skippedAnswers/answers.length) * 100);
  correctAnswers = Math.round((correctAnswers / answers.length) * 100);
  wrongAnswers = 100 - skippedAnswers - correctAnswers;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz is complete" />
      <h2>Quiz is complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswers}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswers}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswers}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = 'user-answer';
          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }
          return (
            <li key={QUESTIONS[index].text}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'skipped'}</p>
            </li>
          );
        })}

      </ol>
    </div>
  );
}

Summary.propTypes = {
  answers: PropTypes.array,
};
