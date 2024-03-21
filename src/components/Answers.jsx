import React, {useRef} from 'react';
import PropTypes from 'prop-types';
/**
 * To show answer options on the screen
 *
 * @return {JSX.Element}
 */
export default function Answers({
  selectedAnswer,
  options,
  onSelect,
  answerState,
}) {
  const shuffledOptions = useRef();
  if (!shuffledOptions.current) {
    shuffledOptions.current = [...options];
    shuffledOptions.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul>
      {shuffledOptions.current.map((option) => {
        const isSelected = option === selectedAnswer;
        let cssClass = '';
        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }
        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={option} className="answer">
            <button className={cssClass} onClick={() => onSelect(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Answers.propTypes = {
  selectedAnswer: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  answerState: PropTypes.string,
};
