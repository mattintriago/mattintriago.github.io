// <!-- -----------------------------------------------------------------------------------
// *  
// *  File: Notes.js
// *  Desc: 
// * 
// *  Date     Eng          Change Description
// *  -------------------------------------------------------------------------------------
// *  8/26/24  MIntriago    Initial version.
// * 
// ------------------------------------------------------------------------------------ -->

import styled from "styled-components";
import MarkdownNotes from "../components/MarkdownNotes";

const Notes = (props) => {
  return <>

    <Container>
      <Section>
        <h1>Notes</h1>
      <MarkdownNotes />
      </Section>
    </Container>

  </>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-top: 40px;

`;


const Section = styled.section`
  width: 100%;
  max-width: 800px;

  &.full-screen {
    height: 100vh;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: white;
    font-size: 24px;
  }
`;

export default Notes;
