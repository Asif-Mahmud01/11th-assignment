import React from 'react';
import Team from '../Team';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;