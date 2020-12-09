import React from 'react';
import Projects from './Projects'
import Approach from './Approach';
import Articles from './Articles';
import Main from "./Main"
import Services from './Services';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div>
            <Main/>
            <Services/>
            <Approach/>
            <Projects/>
            <Articles/>
            <WhyUs/>
        </div>
    );
};

export default Home;