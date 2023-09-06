 
// components/CourseCard.js
import React from 'react';

const CourseCard = () => {
  return (
    <div className="course-card">
      <div className="course-thumbnail"></div>
      <div className="course-info">
        <h3 className="course-title">Course Title</h3>
        <p className="course-description">Course description goes here.</p>
      </div>
    </div>
  );
};

export default CourseCard;
