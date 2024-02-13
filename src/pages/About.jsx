import React from "react";
import imageSrc from "../assets/profilePic.png";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-window  bgImg">
      <div className="relative isolate py-24 sm:py-32 flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap items-center">
          <div className="max-w-xl lg:w-1/3 lg:mr-30 lg:pr-30">
            <img
              src={imageSrc}
              alt="Your Image"
              className="object-cover w-full h-auto lg:w-full lg:h-full"
            />
          </div>
          <div className="mx-auto max-w-2xl lg:w-2/3 lg:mx-0 lg:mr-auto mt-6 bgImg projects-card  p-7 lg:mt-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-7 text-white font-bold  ">
              {/* Your content */}
              My name is Mustapha M Kromah, a junior web developer currently
              pursuing my studies at the University of Pennsylvania. My passion
              for technology and problem-solving led me to delve into the world
              of full stack web development, where I've been exploring the
              intricacies of both front-end and back-end technologies.
            </p>
           

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-5xl">
              {" "}
              Education
            </h2>

            <p className="mt-6 text-lg leading-7 text-white font-bold ">
              I am currently a student at the University of Pennsylvania,
              majoring in. Throughout my academic journey, I've had the
              opportunity to dive deep into various aspects of computer science
              and web development, honing my skills and gaining valuable
              insights into modern web technologies. Experience My journey into
              web development began with a curiosity-driven exploration of HTML,
              CSS, and JavaScript. As I delved deeper, I expanded my knowledge
              to encompass popular front-end frameworks like React.js, which
              I've used to create interactive and user-friendly web interfaces.
              On the back-end side, I've dabbled with server-side languages like
              Node.js and Python, building RESTful APIs and exploring database
              management systems such as MongoDB and MySQL. I've also gained
              experience in deploying applications using platforms like Heroku
              and AWS. Projects During my time as a student, I've worked on
              several exciting projects that have allowed me to apply my skills
              in practical scenarios. From creating dynamic e-commerce platforms
              to building robust CRUD applications, each project has been a
              valuable learning experience that has contributed to my growth as
              a developer.
            </p>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-5xl">
              
              Interest
            </h2>
            <p className="mt-6 text-lg leading-7 text-white font-bold ">
              Interests Outside of coding, I enjoy. Whether it's exploring new
              hiking trails, attending tech meetups, or experimenting with new
              recipes in the kitchen, I believe in maintaining a healthy balance
              between work and play. Let's Connect! I'm always eager to connect
              with fellow developers, mentors, and industry professionals.
              Whether it's discussing new projects, sharing insights, or simply
              chatting about our shared interests, feel free to reach out to me
              via my contact page .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
