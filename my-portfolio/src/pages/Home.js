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


import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = (props) => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>

      <Section id="about" className={visibleSections.includes("about") ? "visible" : ""}>
        <Wrap>
          <a href="/">
            <ProfileImage src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Matthew Intriago" className="logo" />
          </a>
          <h1>Matthew Intriago</h1>
          <h2>Software Engineer</h2>
          <h3>Melbourne, FL</h3>
          <h1>About Me</h1>
            <p>
              Software Engineer with a demonstrated background in developing Python and C++ applications for transportation and defense industries. 
              Experienced in Docker-based infrastructures, system integration, and software testing. 
              Strong engineering professional with a Bachelor's degree in Computer Science from Florida Institute of Technology.
            </p>
          
          <ContactLinks>
            <a href="mailto:mintriago2017@my.fit.edu"><FaEnvelope /> <span>Email</span></a>
            <a href="tel:+14074527951"><FaPhone /> <span>Phone</span></a>
            <a href="https://www.linkedin.com/in/matthew-intriago/"><FaLinkedin /> <span>LinkedIn</span></a>
            <a href="https://github.com/mattintriago"><FaGithub /> <span>Github</span></a>
          </ContactLinks>

        </Wrap>
      </Section>

      <Section id="experience" className={visibleSections.includes("experience") ? "visible" : ""}>
        <Wrap>
        <h1>Work Experience</h1>
        <JobExperience>
          <h2>Software Engineer I</h2>
          <h3>Heka Aero LLC, Melbourne, FL</h3>
          <h4>Nov. 2021 – Aug. 2024</h4>
          <ul>
            <li>Contracted to develop Python and C++ applications within a Docker-based infrastructure for Wabtec Corporation and Maritime Tactical Systems, Inc.</li>
            <li>Conducted thorough testing and validation of integrated systems to ensure reliability and performance against defined requirements.</li>
            <li>Created and maintained comprehensive documentation for the team, including detailed onboarding instructions, test case procedures, installation guides, and application READMEs.</li>
            <li>Performed ongoing maintenance, support, and enhancements for existing systems and platforms, which included troubleshooting and debugging reported issues.</li>
            <li>Collaborated with inter-disciplined engineers in an agile environment and participated in daily scrums.</li>
          </ul>
        </JobExperience>
        <JobExperience>
          <h2>Associate Software Engineering Technician</h2>
          <h3>Leonardo DRS, Melbourne, FL</h3>
          <h4>May. 2019 – Jun. 2020</h4>
          <ul>
            <li>Developed C/C++ code in a Linux environment in support of active projects.</li>
            <li>Developed automated unit tests and integrated them into a Jenkins pipeline.</li>
            <li>Supported engineering with routine engineering duties and/or hands-on tasks.</li>
          </ul>
        </JobExperience>
        <JobExperience>
          <h2>Phone Analyst</h2>
          <h3>Florida Institute of Technology, Melbourne, FL</h3>
          <h4>Sep. 2017 – Jun. 2019</h4>
          <ul>
            <li>Applied knowledge of computer software and hardware skills to incoming calls and appointments from students, faculty, and staff across campus.</li>
            <li>Diagnosed and repaired computers across campus, helping to eliminate technical difficulties and inefficiencies for students, faculty, staff, and classroom technology.</li>
          </ul>
      </JobExperience>
      </Wrap>
    </Section>

      <Section id="education" className={visibleSections.includes("education") ? "visible" : ""} >
        <Wrap>
          <h1>Education</h1>
          <h2>Bachelor of Science: Computer Science</h2>
          <h3>Florida Institute of Technology, Melbourne, FL</h3>
          <h4>Aug. 2017 – May. 2021</h4>
          <h5>GPA: 3.31</h5>
        </Wrap>
      </Section>

       <Section id="skills" className={visibleSections.includes("skills") ? "visible" : ""}>
        <Wrap>
          <h1>Skills</h1>
          <SkillsGroup>
            <h3>Programming Languages</h3>
            <SkillsList>
              <li>Python</li>
              <li>C++</li>\
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PostgreSQL</li>
            </SkillsList>
          </SkillsGroup>
          <SkillsGroup>
            <h3>Frameworks & Tools</h3>
            <SkillsList>
              <li>Linux</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Jenkins</li>
              <li>VS Code</li>
              <li>RTI DDS</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>React</li>
            </SkillsList>
          </SkillsGroup>
        </Wrap>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 100px auto 0;
  padding: 20px;
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrap = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #292727;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  h1 {
    margin-top: 0;
    color: white;
    font-size: 24px;
  }

  h2 {
    color: #c6c2c2;
    font-size: 20px;
  }

  h3 {
    color: #b2afaf;
    font-size: 18px;
  }

  h4 {
    color: #7d7d81 ;
    font-size: 16px;
  }

  h5 {
    color: #7d7d81 ;
    font-size: 16px;
  }

  p {
    color: white;
    font-size: 16px;
    text-align: justify;
  }
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

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    margin: 10px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0077b5;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export default Home;