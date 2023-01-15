import React from 'react';
import Carusel from './Carusel';
import ContactUs from './ContactUs';
import CourseDisplay from './CourseDisplay';
// import SpecialDiscount from './ContactUs';

const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <CourseDisplay></CourseDisplay>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;