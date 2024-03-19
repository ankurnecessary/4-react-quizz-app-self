import React from 'react';
import PropTypes from 'prop-types';
/**
 * To show answer options on the screen
 *
 * @return {JSX.Element}
 */
export default function Answers({options, onSelect}) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option} className="answer">
          <button onClick={() => onSelect(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

Answers.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
};
