import React from 'react';


const Question = ({ question }) => {
    console.log(question);

    const answers = [decodeURIComponent(question.incorrect_answers)];
    const randomizeAnswers = answers[Math.floor(Math.random()*answers.length)];

    console.log(answers, randomizeAnswers);
    
    return (
        <div>
            <h3>{decodeURIComponent(question.question)}</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}


export default Question;