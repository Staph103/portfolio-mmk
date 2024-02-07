import React from 'react';
import Projects from '../components/Project'; // Import the Projects component

function Portfolio() {
  // Define project data (could be fetched from an API or passed as props)
  const projectData = [
    {
      id: 1,
      imgSrc: '/path/to/image1.jpg',
      title: 'Project 1',
      description: 'Description for Project 1',
    },
    {
      id: 2,
      imgSrc: '/path/to/image2.jpg',
      title: 'Project 2',
      description: 'Description for Project 2',
    },
    // Add more project objects as needed
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








    //     <>
//       <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-300 dark:bg-dark">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full px-4">
//               <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//                 <span className="text-primary mb-2 block text-lg font-semibold">
//                   My Portfolio
//                 </span>
//                 <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
//                   My Recent Projects
//                 </h2>
//                 <p className="text-body-color text-base dark:text-dark-6">
//                   There are many variations of passages of Lorem Ipsum available
//                   but the majority have suffered alteration in some form.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="w-full flex flex-wrap justify-center -mx-4">
//             <div className="w-full px-4">
//               <ul className="flex flex-wrap justify-center mb-12 space-x-1">
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("all")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "all"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     All Projects
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("REACT")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "REACT"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     REACT
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("SQL")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "SQL"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     SQL
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("marketing")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
//                       showCard === "marketing"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     Marketing
//                   </button>
//                 </li>
//                 <li className="mb-1">
//                   <button
//                     onClick={() => handleProject("development")}
//                     className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-3 ${
//                       showCard === "development"
//                         ? "activeClasses bg-primary text-white"
//                         : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     Development
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-4">
//             <PortfolioCard
//               img={<WeatherImg src={WeatherImg} />}
//               category="REACT"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
//               category="marketing"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
//               category="marketing"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
//               category="Development"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
//               category="SQL"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//             <PortfolioCard
//               ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
//               category="Marketing"
//               title="Creative Agency"
//               button="View Details"
//               buttonHref="#"
//               showCard={showCard}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;

// const PortfolioCard = ({
//   showCard,
//   category,
//   ImageHref,
//   title,
//   button,
//   buttonHref,
// }) => {
//   return (
//     <>
//       <div
//         className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
//           showCard === "all" || showCard === category.toUpperCase()
//             ? "block"
//             : "hidden"
//         }`}
//       >
//         <div className="relative mb-12">
//           <div className="overflow-hidden rounded-[10px]">
//             <img src={ImageHref} alt="portfolio" className="w-full" />
//           </div>
//           <div className="relative z-10 mx-7 -mt-10 rounded-lg bg-white dark:bg-dark-2 py-[5px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
//             <span className="text-primary mb-2 block text-sm font-medium">
//               {category}
//             </span>
//             <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
//             <a
//               href={buttonHref}
//               className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
//             >
//               {button}
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
