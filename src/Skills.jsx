import React from "react";
import { styled } from "styled-components";

function Skills(props) {
  const skillsList = props.skillsList;

  const renderList = skillsList.map((i, index) => {
    return (
      <StyledItem className="item" key={index}>
        <div className="skills">{i.title}</div>
        <div className="skillsYear">{i.year}</div>
        <div className="startDate">{i.start}</div>
        <div className="endDate">{i.end}</div>
      </StyledItem>
    );
  });

  return (
    <section className="preview-section">
      {skillsList.length ? (
        <div className="skills start">{`Skills {`}</div>
      ) : null}

      <div className="skills preview-section-content">{renderList}</div>

      {skillsList.length ? <div className="skills start">{`}`}</div> : null}
    </section>
  );
}

export default Skills;

const StyledItem = styled.div`
  display: flex;
`;
