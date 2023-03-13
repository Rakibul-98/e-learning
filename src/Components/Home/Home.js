import React from 'react';
import Header from '../Header/Header';
import Benefit from './Benefit';
import Category from './Category';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Header/>
            <Benefit/>
            <Category/>
            <Stats/>
        </div>
    );
};

export default Home;