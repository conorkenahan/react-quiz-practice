import React, {useEffect} from 'react';
import { useQuestionsContext } from '../../contexts/QuestionsContext.js';


const Homepage = () => {
 const { questions } = useQuestionsContext();

    useEffect(() => {
        console.log(questions)
    })

    return (
        <div>
            {questions.map(result => {
                return <p>{result.question}</p>
            })}
        </div>
    )
}

export default Homepage;