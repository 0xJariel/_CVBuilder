import { styled } from "styled-components";
import { useState } from "react";
import "./index.css";

const Heading = (props) => {
  const { fullName, jobTitle, email, phoneNumber, location } = props.heading;
  return (
    <StyledHeading className="">
      <div className="header">
        <h1 className="full-name">{fullName}</h1>
        <div className="start">{`{`}</div>
      </div>
      <div className="preview-section">
        <div className="heading-p">
          // <span className="personal job-title">{jobTitle}</span>
        </div>
        <div className="heading-p">
          // <span className="personal email">{email}</span>
        </div>
        <div className="heading-p">
          // <span className="personal phone-number">{phoneNumber}</span>
        </div>
        <div className="heading-p">
          <div>
            // <span className="personal location">{location}</span>
          </div>
        </div>
      </div>
    </StyledHeading>
  );
};

export default Heading;

const StyledHeading = styled.div`
  /* font-family: var(--font); */

  .header {
  }

  .personal-info > div {
    /* color: red; */
  }
`;
