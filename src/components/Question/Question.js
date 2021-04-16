import React, { useState, useEffect } from 'react';


const Question = ({ question }) => {
    let answers = question.incorrect_answers;
    answers && answers.push(question.correct_answer);
    let randomizedAnswers = answers && answers[Math.floor(Math.random()*answers.length)];
    console.log(answers);
    
    return (
        <div>
            <h3>{question && decodeURIComponent(question.question)}</h3>
            {answers && answers.map(answer => {
                return <p>{decodeURIComponent(answer)}</p>
            })}
        </div>
    )
}


export default Question;