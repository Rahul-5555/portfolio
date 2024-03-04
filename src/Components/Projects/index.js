import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ setOpenModal }) => { // Removed the 'openModal' prop as it's not being used in the component
  const [toggle, setToggle] = useState('all');
  
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
        <ToggleButtonGroup>
          {/* Toggle buttons code */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard 
                project={project} 
                setOpenModal={setOpenModal} // Pass the 'setOpenModal' function as a prop
                onClick={() => handleProjectClick(project.githubUrl)}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard 
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
