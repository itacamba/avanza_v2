import React from 'react';
import Projects from './Projects'
import Approach from './Approach';
import Articles from './Articles';
import Main from "./Main"
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Main/>
            <Services/>
            <Approach/>
            <Projects/>
            <Articles/>
        </div>
    );
};

export default Home;