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
import uuid from "react-uuid";
import Experience from "./Experience";
import ExpierenceEditor from "./ExperienceEditor";
import Skills from "./Skills";
import SkillsEditor from "./SkillsEditor";

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
      key: uuid(),
    },
    {
      title: "Electrical Engineering",
      school: `Stanford University`,
      start: "",
      end: "",
      key: uuid(),
    },
  ]);

  const [jobList, setJobList] = useState([
    {
      jobTitle: "Corporate Communications",
      companyName: "Amazon",
      jobStart: "June 2016",
      jobEnd: "May 2021",
      responsibilities: [
        { description: "Do this and that", key: uuid() },
        { description: "call these guys about that thing", key: uuid() },
        { description: "Transfer from here to there", key: uuid() },
      ],
      key: uuid(),
    },
    {
      jobTitle: "Finance Director",
      companyName: "Google",
      jobStart: "",
      jobEnd: "",
      jobEnd: "",
      responsibilities: [
        { description: "", key: uuid() },
        { description: "", key: uuid() },
        { description: "", key: uuid() },
      ],
      key: uuid(),
    },
  ]);

  const [skillsList, setSkillsList] = useState([
    {
      skill: "Javascript",
      key: uuid(),
    },
    {
      skill: "React",
      key: uuid(),
    },
    {
      skill: "Firebase",
      key: uuid(),
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
        <ExpierenceEditor jobList={jobList} setJobList={setJobList} />
        <SkillsEditor skillsList={skillsList} setSkillsList={setSkillsList} />
      </EditorSection>
      <PreviewSection className="preview-side">
        <div className="preview-page">
          <Heading heading={heading} />
          <AboutMe aboutMe={aboutMe} />
          <Education degreeList={degreeList} />
          <Experience jobList={jobList} />
          <Skills skillsList={skillsList} setAwardsList={setSkillsList} />
          <StyledEnd className="end">{`};`}</StyledEnd>
        </div>
      </PreviewSection>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #1e2022;
`;

const EditorSection = styled.section`
  display: grid;
  gap: 20px;
  color: white;
`;

const PreviewSection = styled.section``;

const StyledEnd = styled.div``;
