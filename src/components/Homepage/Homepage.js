import React from 'react';

const Homepage = () => {

    const startQuiz = () => {
        console.log('start quiz')
    }

    return (
        <div>
            <h1>Random Quiz!</h1>
            <button onClick={startQuiz()}>Start!</button>
        </div>
    )
}

export default Homepage;