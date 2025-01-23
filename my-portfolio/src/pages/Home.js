// <!-- -----------------------------------------------------------------------------------
// *  
// *  File: Home.js
// *  Desc: 
// * 
// *  Date     Eng          Change Description
// *  -------------------------------------------------------------------------------------
// *  8/26/24  MIntriago    Initial version.
// * 
// ------------------------------------------------------------------------------------ -->

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import Header from "../components/Header";

const Home = () => {
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

  const sections = [
    {
      id: "home",
      content: (
        
        <HomeContent isScrolled={isScrolled}>
          <AboutHeader>
            <ProfileImageWrapper>
              <ProfileImage src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Matthew Intriago" />
            </ProfileImageWrapper>
            <HeaderContent>
              <HeaderInfo>
                <h1>Matthew Intriago</h1>
                <h2>Software Engineer</h2>
                <h3>Melbourne, FL, United States</h3>
              </HeaderInfo>

              <ContactLinks>
                {[
                  { href: "mailto:mintriago2017@my.fit.edu", icon: FaEnvelope, text: "Email" },
                  { href: "tel:", icon: FaPhone, text: "Phone" },
                  { href: "https://www.linkedin.com/in/matthew-intriago/", icon: FaLinkedin, text: "LinkedIn" },
                  { href: "https://github.com/mattintriago", icon: FaGithub, text: "Github" }
                ].map(({ href, icon: Icon, text }) => (
                  <a key={text} href={href}><Icon /> <span>{text}</span></a>
                ))}
              </ContactLinks>

            </HeaderContent>
          </AboutHeader>
        </HomeContent>
      )
    },
    {
      id: "about",
      title: "About Me",
      content: (
        <>
          <p>
          I am a Software Engineer with 4+ years of experience developing applications across multiple industries including transportation, defense, and cybersecurity. Skilled in agile software development, containerization, and system integration testing. A dedicated engineering professional with a Bachelor's degree in Computer Science from Florida Institute of Technology.
          </p>
          <PDFLinks>
            <ul>
              <li>
                <a href={`${process.env.PUBLIC_URL}/documents/Matthew_Intriago_Resume.pdf`} target="_blank" rel="noopener noreferrer">
                  <FaFilePdf /> Resume
                </a>
              </li>
              <li>
                <a href={`${process.env.PUBLIC_URL}/documents/Matthew_Intriago_Unofficial_Transcript.pdf`} target="_blank" rel="noopener noreferrer">
                  <FaFilePdf /> Transcript
                </a>
              </li>
              {/* Add more PDF links as needed */}
            </ul>
          </PDFLinks>
        </>
      )
    },
    {
      id: "experience",
      title: "Work Experience",
      content: (
        <>
          {[
            {
              title: "Software Developer",
              company: "Leidos, Orlando, FL",
              period: "Oct. 2024 – Present",
              responsibilities: [
                "Subcontracted as a Software Engineer for Cole Engineering Services Inc. working on developing and maintaining software for the CyberTRIDENT program."
              ]
            },
            {
              title: "Software Engineer I",
              company: "Heka Aero LLC, Melbourne, FL",
              period: "Nov. 2021 – Aug. 2024",
              responsibilities: [
                "Contracted to develop Python and C++ applications within a Docker-based infrastructure for Wabtec Corporation and Maritime Tactical Systems, Inc.",
                "Conducted thorough testing and validation of integrated systems to ensure reliability and performance against defined requirements.",
                "Created and maintained comprehensive documentation for the team, including detailed onboarding instructions, test case procedures, installation guides, and application READMEs.",
                "Performed ongoing maintenance, support, and enhancements for existing systems and platforms, which included troubleshooting and debugging reported issues.",
                "Collaborated with inter-disciplined engineers in an agile environment and participated in daily scrums."
              ]
            },
            {
              title: "Associate Software Engineering Technician",
              company: "Leonardo DRS, Melbourne, FL",
              period: "May. 2019 – Jun. 2020",
              responsibilities: [
                "Developed C/C++ code in a Linux environment in support of active projects.",
                "Developed automated unit tests and integrated them into a Jenkins pipeline.",
                "Supported engineering with routine engineering duties and/or hands-on tasks."
              ]
            },
            {
              title: "Phone Analyst",
              company: "Florida Institute of Technology, Melbourne, FL",
              period: "Sep. 2017 – Jun. 2019",
              responsibilities: [
                "Applied knowledge of computer software and hardware skills to incoming calls and appointments from students, faculty, and staff across campus.",
                "Diagnosed and repaired computers across campus, helping to eliminate technical difficulties and inefficiencies for students, faculty, staff, and classroom technology."
              ]
            }
          ].map((job, index) => (
            <JobExperience key={index}>
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <h4>{job.period}</h4>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </JobExperience>
          ))}
        </>
      )
    },
    {
      id: "education",
      title: "Education",
      content: (
        <>
          <h2>Bachelor of Science: Computer Science</h2>
          <h3>Florida Institute of Technology, Melbourne, FL</h3>
          <h4>Aug. 2017 – May. 2021</h4>
          <h5>GPA: 3.31</h5>
        </>
      )
    },
    {
      id: "skills",
      title: "Skills",
      content: (
        <>
          {[
            { title: "Programming Languages", skills: ["Python", "C++", "HTML", "CSS", "JavaScript", "PostgreSQL"] },
            { title: "Frameworks & Tools", skills: ["Linux", "Docker", "Git", "Jenkins", "VS Code", "RTI DDS", "Jira", "Confluence", "React.js"] }
          ].map((group, index) => (
            <SkillsGroup key={index}>
              <h3>{group.title}</h3>
              <SkillsList>
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </SkillsList>
            </SkillsGroup>
          ))}
        </>
      )
    }
  ];

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Container>
        {sections.map(({ id, title, content }) => (
          <Section 
            key={id} 
            id={id} 
            className={`${visibleSections.includes(id) ? "visible" : ""} ${id === "home" ? "full-screen" : ""}`}
          >
            <Wrap>
              {title && <h1>{title}</h1>}
              {content}
            </Wrap>
          </Section>
        ))}
      </Container>
    </>
  );
};

// Styled-Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
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

  &.full-screen {
    height: 100vh;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const Wrap = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #131313;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .full-screen & {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: none;
  }

  p {
    color: white;
    text-align: justify;
  }

  h1 {
    margin-top: 0px;
    color: white;
    font-size: 24px;
  }

  h2 {
    color: #c6c2c2;
    font-size: 20px;
    top-margin: -10px;
  }

  h3 {
    color: #b2afaf;
    font-size: 18px;
    top-margin: -20px;
  }

  h4 {
    color: #7d7d81 ;
    font-size: 16px;
    top-margin: -20px;
  }

  h5 {
    color: #7d7d81 ;
    font-size: 16px;
  }
`;

const PDFLinks = styled.div`
  margin-top: 20px;

  h3 {
    color: #c6c2c2;
    font-size: 20px;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    display: inline-flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
      color: #0077b5;
      background-color: rgba(255, 255, 255, 0.2);
    }

    svg {
      margin-right: 8px;
      font-size: 20px;
    }
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const JobExperience = styled.div`
  margin-bottom: 100px;
  color: white;
  text-align: justify;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

  li {
    color: white;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 5px;
    font-size: 14px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
const SkillsGroup = styled.div`
  margin-bottom: 20px;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    margin: 5px 15px 5px 0;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 18px;

    &:hover {
      color: #0077b5;
    }

    svg {
      margin-right: 8px;
      font-size: 22px;
    }
  }

  @media (min-width: 768px) {
  justify-content: flex-start;

  a {
    margin: 5px 15px 5px 0;
    font-size: 18px;

    svg {
      font-size: 22px;
    }
  }
}
    
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:40px;

   @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }

`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${props => props.isScrolled ? '0' : '100vh'};
  opacity: ${props => props.isScrolled ? '0' : '1'};
  overflow: hidden;
  transition: height 0.5s ease, opacity 0.5s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 40px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

   @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
    
`;

const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 20px;

@media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const HeaderInfo = styled.div`
  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 22px;
    }
  }
`;

export default Home;
