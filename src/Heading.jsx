import { styled } from "styled-components";
import { useState } from "react";
import "./index.css";

const Heading = (props) => {
  const { fullName, jobTitle, email, phoneNumber, location } = props.heading;
  return (
    <StyledHeading className="heading-section">
      <div className="title">
        <h1 className="full-name">{fullName}</h1>
        <div className="start">{`{`}</div>
      </div>
      <div className="personal-info">
        <div>
          // <span className="personal job-title">{jobTitle}</span>
        </div>
        <div>
          // <span className="personal email">{email}</span>
        </div>
        <div>
          // <span className="personal phone-number">{phoneNumber}</span>
        </div>
        <div>
          // <span className="personal location">{location}</span>
        </div>
      </div>
    </StyledHeading>
  );
};

export default Heading;

const StyledHeading = styled.div`
  /* font-family: var(--font); */

  .title {
    font-size: var(--h1-font-size);
    display: flex;
    gap: 25px;
  }

  .personal-info > div {
    color: red;
  }
`;
