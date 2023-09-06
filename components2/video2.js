// components/CourseList.js
import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'Course 1',
    description: 'Description for Course 1.',
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'Description for Course 2.',
  },
  {
    id: 3,
    title: 'Course 3',
    description: 'Description for Course 3.',
  },
  {
    id: 4,
    title: 'Course 4',
    description: 'Description for Course 1.',
  },
  {
    id: 5,
    title: 'Course 5',
    description: 'Description for Course 1.',
  },
  {
    id: 6,
    title: 'Course 6',
    description: 'Description for Course 1.',
  },
  {
    id: 7,
    title: 'Course 7',
    description: 'Description for Course 1.',
  },
  // Add more courses as needed
];

const CourseList = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const handleMouseEnter = (course) => {
    setHoveredCourse(course);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li
          key={course.id}
          className="course-item"
          onMouseEnter={() => handleMouseEnter(course)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="course-title">{course.title}</span>
          {hoveredCourse?.id === course.id && (
            <div className="course-description">{course.description}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
