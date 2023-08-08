import React from "react";
import { styled } from "styled-components";

function Experience(props) {
  const jobList = props.jobList;

  const renderList = jobList.map((i, index) => {
    return (
      <StyledItem className="jobSummary" key={index}>
        <div className="summary-items">
          <div className="jobTitle">{i.jobTitle}</div>
          <div className="companyName">{i.companyName}</div>
          <div className="jobStart">{i.jobStart}</div>
          <div className="jobEnd">{i.jobEnd}</div>
          <div className="responsibility-bracket">{`{`}</div>
        </div>
        <ul className="responsibilities">
          {i.responsibilities.map((item) => {
            return (
              <li className="description" key={item.key}>
                {item.description}
              </li>
            );
          })}
        </ul>
        <div className="resp-end">
          <div className="responsibility-bracket">{`}`}</div>
        </div>
      </StyledItem>
    );
  });

  return (
    <section className="preview-section experience-section">
      {jobList.length ? (
        <div className="experience start">{`Experience {`}</div>
      ) : null}

      <div className="experience-section-content">{renderList}</div>

      {jobList.length ? <div className="experience start">{`}`}</div> : null}
    </section>
  );
}

export default Experience;

const StyledItem = styled.div`
  display: grid;
`;
