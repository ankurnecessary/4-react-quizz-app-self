import React, {useState} from 'react';
import Question from './Question.jsx';
import QUESTIONS from '../questions';
import Summary from './Summary.jsx';

/**
 * Quiz component in which all quiz related functionalities will run
 *
 * @return {JSX.Element}
 */
export default function Quiz() {
  // answer could be null or has the answer string.
  // Null when answered is skipped via timer otherwise selected answer.
  const [answers, setAnswers] = useState([]);
  const currentQuestion = QUESTIONS[answers.length];

  /**
   * Handling answer selection
   *
   * @param {string} answer
   */
  function handleAnswerSelection(answer) {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  }

  /**
   * To handle if a question is skipped
   */
  function handleSkipQuestion() {
    setAnswers((prevAnswers) => [...prevAnswers, null]);
  }

  if (answers.length === QUESTIONS.length) {
    return <Summary answers={answers} />;
  }

  return (
    <div id="quiz">
      {answers.length < QUESTIONS.length && (
        <Question
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswerSelect={handleAnswerSelection}
          onSkipQuestion={handleSkipQuestion}
        />
      )}
    </div>
  );
}
