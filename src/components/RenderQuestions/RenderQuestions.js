import React, { useState, useEffect } from 'react';
import Question from '../Question/Question.js';


const RenderQuestions = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = () => {
        fetch('https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986')
        .then(res => res.json())
        .then(data => setQuestions(data.results))
        .then(console.log(questions))
    };

    const count = 0;

    return (
        <div>
            {questions && <Question question={questions[count]}/>}
        </div>
    )
}


export default RenderQuestions;