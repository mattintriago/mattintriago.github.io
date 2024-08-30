import '../senior-project/sp.css';
import React from 'react';

const Sp = () => {
  return (
    <>
      <title>DISARM</title>
      <link rel="stylesheet" type="text/css" href="sp.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <p></p>
      <hr />
      <p></p>
      <div className="afternoon">
        <div className="backgroundContainer">
          <div className="starfield" />
          <div className="sun" />
          <div className="atmosphere" />
          <div className="spaceshipBody primaryShipColor">
            <div className="tailFin" />
            <div className="fuelContainer" />
            <div className="noseCone primaryShipColor" />
            <div className="windShield" />
            <i className="fa-battery-full fa door" />
            <div className="leg left" />
            <div className="leg right" />
            <div className="navLight flashing" />
            <div className="windowContainer">
              <div className="window left" />
              <div className="window middle" />
              <div className="window right " />
            </div>
            <div className="engineStack">
              <div className="nozzle upper" />
              <div className="nozzle lower" />
            </div>
          </div>
          <div className="spaceElevator">
            <div className="laserReceiver upper" />
            <div className="receiverBox">
              <div className="window" />
              <i className="fa fa-battery-half" />
              <div className="panelAxle">
                <div className="solarPanel left" />
                <div className="solarPanel right" />
              </div>
            </div>
            <div className="laserReceiver" />
            <div className="tether"></div>
          </div>
        </div>
      </div>
      <center>
        <table border={1}>
          <tbody>
            <tr style={{ align: "center width:800px" }}>
              <th
                colSpan={3}
                style={{ padding: "10px text-align:center color:white" }}
              >
                DISARM
              </th>
            </tr>
            <tr align="center" style={{ color: "white" }}>
              <td style={{ color: "white" }}>Team Members and Email Addresses</td>
              <td style={{ color: "white" }}>Matthew Intriago</td>
              <td style={{ color: "white" }}>mintriago2017@my.fit.edu</td>
            </tr>
            <tr align="center" style={{ color: "white" }}>
              <td style={{ color: "white" }}>Faculty Advisor</td>
              <td style={{ color: "white" }}>Dr.Silaghi</td>
              <td style={{ color: "white" }}>msilaghi@fit.edu</td>
            </tr>
            <tr align="center" colSpan={3} style={{ color: "white" }}>
              <td style={{ color: "white" }}>
                <a href="https://github.com/mattintriago/disarm">
                  Github Repository
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      <p></p>
      <center>
        <h3 style={{ color: "white" }}>First Semester</h3>
        <table border={1}>
          <tbody>
            <tr align="center">
              <td>Plan (Aug 31)</td>
              <td>
                <a href="Space Debris Grappling System Project Plan.pdf">Plan</a>,{" "}
                <a href="Space Debrisss Grappling System Plan Presentation.pptx">
                  Presentation
                </a>
              </td>
            </tr>
            <tr align="center">
              <td>Milestone 1 (Sep 28)</td>
              <td>
                <a href="DISARM Requirement Document.pdf">Requirement</a>,{" "}
                <a href="DISARM Design Document.pdf">Design</a>,{" "}
                <a href="DISARM Test Plan.pdf">Test</a>,{" "}
                <a href="M1 DISARM Presentation.pdf">Presentation</a>,{" "}
                <a href="Milestone One Evaluation.pdf">Progress Evaluation</a>
              </td>
            </tr>
            <tr align="center">
              <td>Milestone 2 (Oct 26)</td>
              <td>
                <a href="Milestone 2 Presentation.pptx">Presentation</a>,{" "}
                <a href="Milestone Two Evaluation.pdf">Progress Evaluation</a>
              </td>
            </tr>
            <tr align="center">
              <td>Milestone 3 (Nov 23)</td>
              <td>
                <a href="m3presentation.pptx">Presentation</a>,{" "}
                <a href="Milestone Three Evaluation.pdf">Progress Evaluation</a>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      <center>
        <h3>Second Semester</h3>
        <table border={1}>
          <tbody>
            <tr align="center">
              <td>Plan (Jan 20)</td>
              <td>
                <a href="DISARM Project Plan.pdf">Plan</a>,{" "}
                <a href="Project Plan Presentation.pdf">Presentation</a>
              </td>
            </tr>
            <tr align="center">
              <td>Milestone 4 (Feb 15)</td>
              <td>
                <a href="m4presentation.pptx">Presentation</a>,{" "}
                <a href="Milestone Four Evaluation.pdf">Progress Evaluation</a>
              </td>
            </tr>
            <tr align="center">
              <td>Milestone 5 (Mar 15)</td>
              <td>
                <a href="disarm_poster.jpg">Poster</a>,{" "}
                <a href="disarm_ebook.pdf">e-book page</a>,{" "}
                <a href="m5presentation.pptx">Presentation</a>,{" "}
                <a href="Milestone Five Evaluation.pdf">Progress Evaluation</a>
              </td>
            </tr>
            <tr align="center">
              <td>Milestone 6 (Apr 12)</td>
              <td>
                <a href="userManual.pdf">User/Developer Manual</a>,{" "}
                <a href="https://www.youtube.com/watch?v=66Hwhugrm3c&ab_channel=DISARM">
                  Demo Video
                </a>
                , <a href="m6presentation.pptx">Presentation</a>,{" "}
                <a href="Milestone Six Evaluation.pdf">Progress Evaluation</a>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      <p></p>
      <hr />
    </>
  );
};

export default Sp;
