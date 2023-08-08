import React from "react";
import { styled } from "styled-components";

function Education(props) {
  const degreeList = props.degreeList;

  const renderList = degreeList.map((i, index) => {
    return (
      <StyledItem className="item" key={index}>
        <div className="degree">{i.title}</div>
        <div className="educationLocation">{i.school}</div>
        <div className="startDate">{i.start}</div>
        <div className="endDate">{i.end}</div>
      </StyledItem>
    );
  });

  return (
    <section className="preview-section">
      {degreeList.length ? (
        <div className="education start">{`Education {`}</div>
      ) : null}

      <div className="education preview-section-content">{renderList}</div>

      {degreeList.length ? <div className="education start">{`}`}</div> : null}
    </section>
  );
}

export default Education;

const StyledItem = styled.div`
  display: flex;
`;
