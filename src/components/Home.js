import React from 'react';
import Projects from './Projects'
import Approach from './Approach';
import Articles from './Articles';
import Main from "./Main"
import Services from './Services';
import WhyUs from './WhyUs';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Main/>
            <Services/>
            <Approach/>
            <Projects/>
            <Articles/>
            <WhyUs/>
            <Contact/>
        </div>
    );
};

export default Home;