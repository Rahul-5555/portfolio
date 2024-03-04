import React from 'react';
// import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'; // Removed unused imports
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ setOpenModal }) => {
  // Remove the unused setToggle state setter function
  // const [toggle, setToggle] = useState('all');
  
  // Function to handle clicking on a project card
  const handleProjectClick = (githubUrl) => {
    window.open(githubUrl, '_blank'); // Open the GitHub URL in a new tab
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps. Here are some of my projects.
        </Desc>
        {/* ToggleButtonGroup code */}
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard 
                key={project.id} // Add key prop to each ProjectCard component
                project={project} 
                setOpenModal={setOpenModal} // Pass the 'setOpenModal' function as a prop
                onClick={() => handleProjectClick(project.githubUrl)}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
