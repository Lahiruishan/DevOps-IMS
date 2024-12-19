// src/components/TeacherPage.js
import React from 'react';
import Card from './Card'; // Import the Card component
import './TeacherPage.css'; // Ensure any global styling is applied

const teachers = {
  Maths: [
    { name: 'Mr. John Doe', subject: 'Maths', description: 'Math teacher with 10 years of experience', profilePicture: '/path/to/john.jpg' },
    { name: 'Ms. Jane Smith', subject: 'Maths', description: 'Mathematics educator and mentor', profilePicture: '/path/to/jane.jpg' },
    { name: 'Mr. Alan Walker', subject: 'Maths', description: 'Expert in Algebra and Geometry', profilePicture: '/path/to/alan.jpg' },
    { name: 'Mrs. Emma Green', subject: 'Maths', description: 'Passionate about teaching Calculus', profilePicture: '/path/to/emma.jpg' },
  ],
  Science: [
    { name: 'Dr. Mark Taylor', subject: 'Science', description: 'Physics and Chemistry teacher', profilePicture: '/path/to/mark.jpg' },
    { name: 'Ms. Linda Scott', subject: 'Science', description: 'Biology expert with a focus on ecology', profilePicture: '/path/to/linda.jpg' },
    { name: 'Mr. David Brown', subject: 'Science', description: 'Science teacher and researcher', profilePicture: '/path/to/david.jpg' },
    { name: 'Mrs. Olivia White', subject: 'Science', description: 'Passionate about environmental science', profilePicture: '/path/to/olivia.jpg' },
  ],
  Art: [
    { name: 'Ms. Patricia Harris', subject: 'Art', description: 'Specializes in contemporary art techniques', profilePicture: '/path/to/patricia.jpg' },
    { name: 'Mr. Daniel Clark', subject: 'Art', description: 'Acrylic and oil painting instructor', profilePicture: '/path/to/daniel.jpg' },
    { name: 'Ms. Maria Lewis', subject: 'Art', description: 'Graphic design and digital art teacher', profilePicture: '/path/to/maria.jpg' },
    { name: 'Mr. James Carter', subject: 'Art', description: 'Drawing and sketching expert', profilePicture: '/path/to/james.jpg' },
  ],
};

const TeacherPage = () => {
  return (
    <div className="teacher-page">
      <h1>Teachers</h1>

      {/* Maths Section */}
      <section>
        <h2>Maths</h2>
        <div className="card-container">
          {teachers.Maths.map((teacher, index) => (
            <Card
              key={index}
              profilePicture={teacher.profilePicture}
              name={teacher.name}
              description={teacher.description}
            />
          ))}
        </div>
      </section>

      {/* Science Section */}
      <section>
        <h2>Science</h2>
        <div className="card-container">
          {teachers.Science.map((teacher, index) => (
            <Card
              key={index}
              profilePicture={teacher.profilePicture}
              name={teacher.name}
              description={teacher.description}
            />
          ))}
        </div>
      </section>

      {/* Art Section */}
      <section>
        <h2>Art</h2>
        <div className="card-container">
          {teachers.Art.map((teacher, index) => (
            <Card
              key={index}
              profilePicture={teacher.profilePicture}
              name={teacher.name}
              description={teacher.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeacherPage;
