// <!-- -----------------------------------------------------------------------------------
// *  
// *  File: Header.js
// *  Desc: 
// * 
// *  Date     Eng          Change Description
// *  -------------------------------------------------------------------------------------
// *  8/26/24  MIntriago    Initial version.
// * 
// ------------------------------------------------------------------------------------ -->

import React from "react";
import styled from "styled-components";

const Header = ({ isScrolled }) => {
  return (
    <Container isScrolled={isScrolled}>
      <Logo>
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Matthew Intriago" className="logo" />
        </a>
      </Logo>
      <NavMenu>
        <a href="/" aria-label="Home">
          <span>Home</span>
        </a>
        <a href="/projects">
          <span>Projects</span>
        </a>
        <a href="/notes">
          <span>Notes</span>
        </a>
      </NavMenu>
      <Wrap></Wrap>
    </Container>
  );
};

//Styled-Components

const Container = styled.div`
  position: fixed;
  background-color: #0d0c0c;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${props => props.isScrolled ? '90px' : '0'};
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;
  transition: height 0.5s ease;
  overflow: hidden;
`;

const Logo = styled.a`
  width: 80px;
  align-items: center;
  display: flex;

  img {
    width: 90%;
    border-radius: 50%;
  }
`;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 1px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 548px) {
    display: none;
  }
`;

export default Header;