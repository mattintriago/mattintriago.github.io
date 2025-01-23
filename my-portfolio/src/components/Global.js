// <!-- -----------------------------------------------------------------------------------
// *  
// *  File: Global.js
// *  Desc: 
// * 
// *  Date     Eng          Change Description
// *  -------------------------------------------------------------------------------------
// *  8/26/24  MIntriago    Initial version.
// * 
// ------------------------------------------------------------------------------------ -->

import styled, { createGlobalStyle } from "styled-components";

const Global = (props) => {
  return <GlobalStyle></GlobalStyle>;
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color:rgb(255, 255, 255);
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', sans-serif;
  }
`;

export default Global;