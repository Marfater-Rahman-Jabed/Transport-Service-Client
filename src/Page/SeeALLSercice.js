import React, { useEffect, useState } from 'react';
import CourseDisplayCard from './CourseDisplayCard';

const SeeALLSercice = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    return (
        <div>
            <div>
                <h1 className='text-5xl text-orange-600 text-center font-bold  mt-5 '>Our Services ...</h1>
                <h1 className='text-2xl text-black text-center font-semibold  shadow-lg pb-5 mt-2'>We are always ready to serve you.</h1>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    courses.map(course => <CourseDisplayCard
                        key={course._id}
                        course={course}
                    ></CourseDisplayCard>)
                }

            </div>
        </div>
    );
};

export default SeeALLSercice;