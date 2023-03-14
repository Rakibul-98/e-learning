import React from 'react';
import Foot from '../Footer/Foot';
import Header from '../Header/Header';
import Admission from './Admission';
import Benefit from './Benefit';
import Category from './Category';
import Contact from './Contact';
import Customer from './Customer';
import FAQ from './FAQ';
import FeatureCourse from './FeatureCourse';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Header/>
            <Benefit/>
            <Category/>
            <Stats/>
            <FeatureCourse/>
            <FAQ/>
            <Contact/>
            <Customer/>
            <Admission/>
            <Foot/>
        </div>
    );
};

export default Home;