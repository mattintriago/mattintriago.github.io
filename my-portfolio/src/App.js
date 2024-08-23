import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="mainHeader">
      <img src={`${process.env.PUBLIC_URL}/DSC_0032.JPG`} alt="Matthew Intriago" className="logo" />
      <h1>Matthew Intriago</h1>
      <p>Software Engineer</p>
      <p>Melbourne, FL</p>
    </header>
  );
}

// function subHeader() 

// function About() {
//   return (
//     <section>
//       <h2>About Me</h2>
//       <p>Detail-oriented software engineer with experience in various technologies...</p>
//     </section>
//   );
// }

// function Experience() {
//   return (
//     <section>
//       <h2>Experience</h2>
//       <ul>
//         <li>Company A - Software Engineer (2020-2022)</li>
//         <li>Company B - Junior Developer (2018-2020)</li>
//       </ul>
//     </section>
//   );
// }

// function Skills() {
//   return (
//     <section>
//       <h2>Skills</h2>
//       <ul>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>Node.js</li>
//         <li>Python</li>
//       </ul>
//     </section>
//   );
// }

// function Contact() {
//   return (
//     <section>
//       <h2>Contact</h2>
//       <p>Email: matthew.intriago@example.com</p>
//     </section>
//   );
// }

function App() {
  return (
    <div className="App">
      <Header />
      {/* <About /> */}
      {/* <Experience />
      <Skills />
      <Contact /> */}
    </div>
  );
}

export default App;