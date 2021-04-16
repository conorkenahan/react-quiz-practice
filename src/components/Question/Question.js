import React, { useState, useEffect } from 'react';


const Question = ({ question }) => {
    let answers = question.incorrect_answers;
    answers && answers.push(question.correct_answer);
    let randomizedAnswers = answers && answers[Math.floor(Math.random()*answers.length)];
    let newAnswers = [...new Set(answers)]
    let questionTitle = decodeURIComponent(question.question);

    
    return (
        <div>
            {!question ? <h3>Loading...</h3> : 
            <div>
                <h3>
                    {questionTitle}
                </h3>
                    {newAnswers.map(answer => {
                        return <p>{decodeURIComponent(answer)}</p>
                })}
            </div>
            }
        </div>
    )
}


export default Question;