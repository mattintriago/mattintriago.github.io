// <!-- -----------------------------------------------------------------------------------
// *  
// *  File: Projects.js
// *  Desc: 
// * 
// *  Date     Eng          Change Description
// *  -------------------------------------------------------------------------------------
// *  8/26/24  MIntriago    Initial version.
// * 
// ------------------------------------------------------------------------------------ -->

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          } else {
            setVisibleSections((prev) => prev.filter((id) => id !== entry.target.id));
          }
        });
      },
      { threshold: 0.37 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const projects = [
    {
      id: "debris-removal",
      title: "Debris in Space Autonomous Removal Mechanism",
      description: "Acted as a Control Systems Engineer in developing a single-use, autonomous, and universal space debris grappling device that uses capacitor discharge stud welding as its method of attachment. As a part of my role, I was responsible for developing a simulation model to demonstrate the device's ability to capture debris in space using ROS and Gazebo.",
      githubLink: "https://github.com/mattintriago/disarm",
      demoLink: "https://mattintriago.github.io/sp"
    },
    {
      id: "portfolio-website",
      title: "This Portfolio Website",
      description: "This website was created using React and styled-components. It was built to showcase my projects and experience as a Software Engineer.",
      githubLink: "https://github.com/mattintriago/mattintriago.github.io",
      demoLink: "https://mattintriago.github.io"
    },
    {
      id: "freds-icecream",
      title: "Freds - Artisan Ice Cream Website",
      description: "Currently developing a website for a local ice cream shop using Next.js, TailwindCSS, Firebase, and Bootstrap instead of the native React library and styled-components.",
      githubLink: "https://github.com/mattintriago/fredsmiami",
      demoLink: "https://fredsmiami.com"
    }
  ];

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Container>
        <Section 
          id="projects"
          className={`${visibleSections.includes("projects") ? "visible" : ""}`}
        >
          <h1>Projects</h1>
          {projects.map((project) => (
            <ProjectWrap key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <LinkContainer>
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  GitHub
                </Link>
                <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                  Demo
                </Link>
              </LinkContainer>
            </ProjectWrap>
          ))}
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  
  h1 {
    margin-top: 0px;
    color: black;
    font-size: 24px;
  }

`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectWrap = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solidrgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  p {
    color: black;
    text-align: justify;
  }

  h2 {
    color:rgb(0, 0, 0);
    font-size: 20px;
    margin-top: 0;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color:rgb(88, 148, 180);
  }
`;

export default Projects;
