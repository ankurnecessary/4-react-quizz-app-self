import React, {useState} from 'react';
import Question from './Question.jsx';
import QUESTIONS from '../questions';
/**
 * Quiz component in which all quiz related functionalities will run
 *
 * @return {JSX.Element}
 */
export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const currentQuestion = QUESTIONS[answers.length];

  return <div id='quiz'>
    <Question question={currentQuestion} />
  </div>;
}
