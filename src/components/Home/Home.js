import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Random Quiz!</h1>
            <Link to={'/question'}> Start!</Link>
        </div>
    )
}

export default Home;