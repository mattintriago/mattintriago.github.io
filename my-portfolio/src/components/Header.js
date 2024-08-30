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
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") setActiveItem("home");
    else if (path === "/projects") setActiveItem("projects");
    else if (path === "/notes") setActiveItem("notes");
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <Container isScrolled={isScrolled}>
      <Logo href="/">
        <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Matthew Intriago" className="logo" />
      </Logo>
      <NavMenu>
        <NavItem 
          href="/" 
          aria-label="Home" 
          $isActive={activeItem === "home"} 
          onClick={() => handleItemClick("home")}
        >
          <span>Home</span>
        </NavItem>
        <NavItem 
          href="/projects" 
          $isActive={activeItem === "projects"} 
          onClick={() => handleItemClick("projects")}
        >
          <span>Projects</span>
        </NavItem>
        <NavItem 
          href="/notes" 
          $isActive={activeItem === "notes"} 
          onClick={() => handleItemClick("notes")}
        >
          <span>Notes</span>
        </NavItem>
      </NavMenu>
      <MobileMenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MobileMenuIcon>
      {isOpen && (
        <MobileMenu isScrolled={isScrolled}>
          <MobileNavItem href="/" onClick={() => handleItemClick("home")} $isActive={activeItem === "home"}>Home</MobileNavItem>
          <MobileNavItem href="/projects" onClick={() => handleItemClick("projects")} $isActive={activeItem === "projects"}>Projects</MobileNavItem>
          <MobileNavItem href="/notes" onClick={() => handleItemClick("notes")} $isActive={activeItem === "notes"}>Notes</MobileNavItem>
        </MobileMenu>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  background-color: #0d0c0c;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${props => props.isScrolled ? '90px' : '70px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 1000;
  transition: height 0.5s ease;
`;

const Logo = styled.a`
  width: 80px;
  display: flex;
  align-items: center;

  img {
    width: 70%;
    border-radius: 50%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
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
      opacity: ${props => props.$isActive ? 1 : 0};
      position: absolute;
      right: 0;
      transform-origin: left center;
      transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: ${props => props.$isActive ? 'visible' : 'hidden'};
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
`;

const MobileMenuIcon = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  z-index: 1001;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 80px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  top: ${props => props.isScrolled ? '90px' : '70px'};
  left: 0;
  width: 100%;
  background-color: #0d0c0c;
  padding: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavItem = styled.a`
  text-decoration: none;
  color: ${props => props.$isActive ? '#0077b5' : 'white'};
  font-size: 18px;
  margin-bottom: 15px;
  transition: color 0.3s ease;

  &:hover, &:focus {
    color: #0077b5;
  }
`;

export default Header;
