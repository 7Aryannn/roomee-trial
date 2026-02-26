import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <FeaturedProperties />
            <HowItWorks />
            <Testimonials />
        </div>
    );
};

export default Home;
