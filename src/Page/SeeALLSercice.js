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
        <div className='grid grid-cols-3 gap-2'>
            {
                courses.map(course => <CourseDisplayCard
                    key={course._id}
                    course={course}
                ></CourseDisplayCard>)
            }

        </div>
    );
};

export default SeeALLSercice;