import React from 'react';
import Projects from './Projects'
import Approach from './Approach';
import Main from "./Main"
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Main/>
            <Services/>
            <Approach/>
            <Projects/>
            <Services/>
        </div>
    );
};

export default Home;