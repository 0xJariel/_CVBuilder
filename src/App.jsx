import "./index.css";
import "./App.css";
import { styled } from "styled-components";
import { useState } from "react";
import Heading from "./Heading";
import HeadingEditor from "./HeadingEditor";
import AboutMe from "./AboutMe";
import AboutMeEditor from "./AboutMeEditor";
import Education from "./Education";
import EducationEditor from "./EducationEditor";

function App() {
  const [heading, setHeading] = useState({
    fullName: "Jariel Arias",
    jobTitle: "Full Stack Web Developer",
    email: "Jariel@gmail.com",
    phoneNumber: "(123) 456-7890",
    location: "Denver, Co",
  });

  const [aboutMe, setAboutMe] =
    useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi
  doloremque quibusdam eligendi laboriosam exercitationem perspiciatis.
  Consectetur dolore dolorum culpa. Quo vel pariatur itaque quisquam ex
  voluptatibus soluta aliquam voluptates?`);

  const [degreeList, setDegreeList] = useState([
    {
      title: "The Odin Project",
      school: `Stanford University`,
      start: "01/08/2021",
      end: "09/20/2023",
    },
    {
      title: "Electrical Engineering",
      school: `Stanford University`,
      start: "",
      end: "",
    },
  ]);

  return (
    <StyledApp>
      <EditorSection>
        <HeadingEditor setHeading={setHeading} />
        <AboutMeEditor setAboutMe={setAboutMe} />
        <EducationEditor
          degreeList={degreeList}
          setDegreeList={setDegreeList}
        />
      </EditorSection>
      <PreviewSection>
        <div className="preview-page">
          <Heading heading={heading} />
          <AboutMe aboutMe={aboutMe} />
          <Education degreeList={degreeList} />
          <StyledEnd className="end">{`}`}</StyledEnd>
        </div>
      </PreviewSection>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: lightblue;
`;

const EditorSection = styled.section``;

const PreviewSection = styled.section`
  height: 100vh;
  /* font-family: var(--font-family);
  font-size: var(--font-size); */
  width: 460px;
  height: 650px;
  padding: 20px 20px;
  background-color: grey;
  font-size: 13px;

  h2 {
    font-size: var(--h2-font-size);
  }

  .preview-page {
  }
`;

const StyledEnd = styled.div`
  color: var(--h1-color);
  font-size: var(--h1-font-size);
  font-family: var(--h1-font-family);
  font-weight: var(--h1-font-weight);
`;
