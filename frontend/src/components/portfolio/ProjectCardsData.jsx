import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCards from "./ProjectCards"; // Import ProjectCards component
import { NavLink } from "react-router-dom"; // For navigation

const ProjectCardsData = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5001/portfolio");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
    <div className="dark:bg-[#0B0B0F] text-center py-10 px-4">
  <div className="relative bg-transparent max-w-3xl mx-auto p-6">
    <div className="bg-[#1C1C1E] rounded-lg shadow-lg p-8 text-center">
      {/* Title with Animation */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 animate-fade-in-delay">
        <span className=" text-white">Our Projects</span>
      </h1>
      {/* Description with Animation */}
      <p className="text-base sm:text-lg lg:text-xl text-neutral-300 opacity-1 animate-fade-in-delay2">
        <span className=" text-neutral-300">
          We offer a variety of services to help bring your ideas to life. Whether you need web development, mobile app development, or other custom services, we have you covered. Our team ensures top-notch quality and customer satisfaction in every project.
        </span>
      </p>
    </div>
  </div>
</div>
    <div className="flex flex-wrap gap-8 justify-center mb-28">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={project.title}>
            <NavLink to={`/portfolio/${project.title}`} className="block">
              <ProjectCards
                title={project.title}
                category={project.category}
                link={`/portfolio/${project.title}`}
                image={project.image}
                logo={project.logo}
                type="content"
                projectoverview={project.projectOverview} // Passing the overview
              />
            </NavLink>
          </div>
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
    </>
  );
};

export default ProjectCardsData;
