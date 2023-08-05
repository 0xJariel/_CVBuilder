import "./index.css";
import "./App.css";
import { styled } from "styled-components";
import { useState } from "react";
import Heading from "./Heading";
import HeadingEditor from "./HeadingEditor";

function App() {
  const [heading, setHeading] = useState({
    fullName: "Jariel Arias",
    jobTitle: "Full Stack Web Developer",
    email: "Jariel@gmail.com",
    phoneNumber: "(123) 456-7890",
    location: "Denver, Co",
  });

  return (
    <StyledApp>
      <EditorSection>
        <HeadingEditor setHeading={setHeading} />
      </EditorSection>
      <PreviewSection>
        <div className="preview-page">
          <Heading heading={heading} />
        </div>
      </PreviewSection>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const EditorSection = styled.section``;

const PreviewSection = styled.section`
  height: 100vh;
  font-family: var(--font-family);
  font-size: var(--font-size);

  h2 {
    font-size: var(--h2-font-size);
  }

  .preview-page {
  }
`;
