import React from 'react';
import '../../components/header/DailyAssignmentsPage.css';

const DailyAssignmentsPage = () => {
  const assignments = [
    {
      id: 1,
      title: 'Networking Basics',
      description: 'Explain the OSI model in detail.',
    },
    {
      id: 2,
      title: 'Operating System - Zero To Hero',
      description: 'What is a deadlock? What are the conditions for a deadlock to occur?',
    },
    {
      id: 3,
      title: 'DSA Bootcamp',
      description: 'Write any 4 sorting algorithms.',
    },
  ];

  return (
    <div className="assignment-container">
      <h1>Daily Assignments</h1>
      {assignments.map((assignment) => (
        <div key={assignment.id} className="assignment-card">
          <div className="assignment-content">
            <div className="assignment-info">
              <h2>{assignment.title}:</h2>
              <p>{assignment.description}</p>
            </div>
            <div className="attempt-button">
              <button>Attempt</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyAssignmentsPage;
