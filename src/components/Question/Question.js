import React, {useEffect} from 'react';

const Homepage = ({ questions }) => {

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