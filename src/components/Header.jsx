import React from 'react';
import logoImg from '../assets/quiz-logo.png';
/**
 * Header component
 *
 * @return {JSX.Element}
 */
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
