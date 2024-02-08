import React from 'react';

import Projects from '../components/Project'; 
import weatherApp from '../assets/weatherAPP.png';
import avenger from '../assets/avenger.png';
import travel from '../assets/travelmate.png'
import portfolio from '../assets/portfolio.png'

function Portfolio() {
  const projectData = [
    {
      id: 1,
      imgSrc: weatherApp,
      title: 'Weather API',
      description: 'Description for Project 1',

    },
    {
      id: 2,
      imgSrc: avenger,
      title: 'Avenger Initative',
      description: 'Description for Project 2',
    },
    {
      id: 3,
      imgSrc: travel,
      title: 'TravelMate',
      description: 'Description for Project 2',
    },
    {
      id: 4,
      imgSrc: portfolio,
      title: 'Portfolio',
      description: 'Description for Project 2',
    },

  ];

  return (
    <div>
      <h1>Portfolio</h1>
      {/* Render Projects component for each project */}
      {projectData.map(project => (
        <Projects
          key={project.id}
          id={project.id}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Portfolio;







