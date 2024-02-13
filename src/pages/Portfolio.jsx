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
      imgSrc: portfolio,
      title: 'Portfolio',
      description: 'Portfolio ',
      Link: 'https://staph103.github.io/professional-portfolio-adv-css/'
    },
    {
      id: 2,
      imgSrc: avenger,
      title: 'Avenger Initative',
      description: 'Description for Project 2',
      Link: "https://rhemlock7.github.io/avenger-initiative/"
    },
    {
      id: 3,
      imgSrc: travel,
      title: 'TravelMate',
      description: 'Description for Project 2',
      Link: "https://github.com/axavier1/travelMate"
    },
    {
      id: 4,
      imgSrc: weatherApp,
      title: 'Weather API',
      description: 'Description for Project 1',
      Link: "https://github.com/Staph103/WeatherApi-MMK"

    }

  ];

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tightfont-bold text-gray-900 sm:text-5xl" >PROJECTS</h1>
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







