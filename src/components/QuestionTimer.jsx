import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/**
 * To show the question timer
 *
 * @return {JSX.Element}
 */
export default function QuestionTimer({maxTime, skipQuestion}) {
  const [remainingTime, setRemainingTime] = useState(maxTime);

  useEffect(() => {
    const timeout = setTimeout(() => {
      skipQuestion();
    }, maxTime);

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

  return <progress max={maxTime} value={remainingTime} />;
}

QuestionTimer.propTypes = {
  maxTime: PropTypes.number,
  skipQuestion: PropTypes.func,
};
