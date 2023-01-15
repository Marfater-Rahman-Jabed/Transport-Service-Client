import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseDisplayCard from './CourseDisplayCard';

const CourseDisplay = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


    return (
        <div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    courses.map(course => <CourseDisplayCard
                        key={course._id}
                        course={course}
                    ></CourseDisplayCard>)
                }

            </div>
            <Link to='' className='text-center mt-4 mb-4 flex  justify-center'><button className='btn btn-primary '>See All Services</button></Link>
        </div>
    );
};

export default CourseDisplay;