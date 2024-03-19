import React from 'react';
import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
/**
 * Main App component
 *
 * @return {JSX.Element}
 */
function App() {
  return <>
    <Header />
    <main>
      <Quiz />
    </main>
  </>;
}


export default App;

