import './App.css';
import React, {useState, useEffect} from 'react';
import Homepage from "./components/Homepage/Homepage.js"
import Question from "./components/Question/Question.js"

function App() {
    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     getQuestions()
    // }, [])

    // const getQuestions = () => {
    //     fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
    //     .then(res => res.json())
    //     .then(data => setQuestions(data.results));
    // };

  return (
    <div className="App">
      <h1>App</h1>
      <Homepage />
      <Question questions={questions} />
    </div>
  );
}

export default App;
