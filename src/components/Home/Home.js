import React from 'react';
import useTitle from '../../Hooks/UseTitle';
import About from '../Aboute/About';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;