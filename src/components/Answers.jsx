import React from 'react';
import PropTypes from 'prop-types';
/**
 * To show answer options on the screen
 *
 * @return {JSX.Element}
 */
export default function Answers({options, onSelect}) {
  /**
   * To handle answer selection
   *
   * @param {string} selectedAnswer
   */
  function handleButtonClick(selectedAnswer) {
    onSelect(selectedAnswer);
  }

  return (
    <ul>
      {options.map((option) => (
        <li key={option} className='answer'>
          <button onClick={() => handleButtonClick(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

Answers.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
};
