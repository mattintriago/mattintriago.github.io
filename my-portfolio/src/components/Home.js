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

const Home = (props) => {
  return (
    <Container>
      <Wrap>
        <h1>About Me</h1>
      </Wrap>
      <Wrap>
        <p>
          Software Engineer with a demonstrated background in developing Python and C++ applications for transportation and defense industries. 
          Experienced in Docker-based infrastructures, system integration, and software testing. 
          Strong engineering professional with a Bachelor's degree in Computer Science from Florida Institute of Technology.
        </p>
      </Wrap>
      <Wrap>
        <h1>Work Experience</h1>
      </Wrap>
      <Wrap>
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
      </Wrap>
      <Wrap>
        <h2>Associate Software Engineering Technician</h2>
        <h3>Leonardo DRS, Melbourne, FL</h3>
        <h4>May. 2019 – Jun. 2020</h4>
        <ul>
          <li>Developed C/C++ code in a Linux environment in support of active projects.</li>
          <li>Developed automated unit tests and integrated them into a Jenkins pipeline.</li>
          <li>Supported engineering with routine engineering duties and/or hands-on tasks.</li>
        </ul>
      </Wrap>
      <Wrap>
        <h2>Phone Analyst</h2>
        <h3>Florida Institute of Technology, Melbourne, F</h3>
        <h4>Sep. 2017 – Jun. 2019</h4>
        <ul>
          <li>Applied knowledge of computer software and hardware skills to incoming calls and appointments from students, faculty, and staff across campus.</li>
          <li>Diagnosed and repaired computers across campus, helping to eliminate technical difficulties and inefficiencies for students, faculty, staff, and classroom technology.</li>
        </ul>
      </Wrap>
      <Wrap>
        <h1>Education</h1>
      </Wrap>
      <Wrap>
        <h2>Bachelor of Science: Computer Science</h2>
        <h3>Florida Institute of Technology, Melbourne, FL</h3>
        <h4>Aug. 2017 – May. 2021</h4>
        <p>GPA: 3.31</p>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  max-width: 800px;
  padding: 20px;
  
  h1 {
  color: black;
  }
`;

const Wrap = styled.div`
  margin-bottom: 20px;
`;

export default Home;