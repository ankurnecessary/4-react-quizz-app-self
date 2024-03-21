import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/**
 * To show the question timer
 *
 * @return {JSX.Element}
 */
export default function QuestionTimer({maxTime, skipQuestion, answerState}) {
  const [remainingTime, setRemainingTime] = useState(maxTime);

  useEffect(() => {
    const timeout = setTimeout(skipQuestion, maxTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [maxTime, skipQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={maxTime}
      value={remainingTime}
      className={answerState}
    />
  );
}

QuestionTimer.propTypes = {
  maxTime: PropTypes.number,
  skipQuestion: PropTypes.func,
  answerState: PropTypes.string,
};
