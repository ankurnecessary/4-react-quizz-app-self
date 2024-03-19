import React from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
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

