import { useState } from "react";
import "./App.css";
import { styled } from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <section className="input-forms-section">
        <PersonalDetails className="personal-details-input">
          <label htmlFor="">
            Full Name
            <input type="text" />
          </label>
          <label htmlFor="">
            Email
            <input type="text" />
          </label>
          <label htmlFor="">
            <div>
              Phone Number <i>recommended</i>
            </div>
            <input type="text" />
          </label>
          <label htmlFor="">
            <div>
              Address <i>recommended</i>
            </div>
            <input type="text" />
          </label>
        </PersonalDetails>
      </section>
      <Preview className="preview-section">
        <div className="preview-page">
          <Heading />
          <div className="about-me">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="education"></div>
          <div className="work-experience"></div>
          <div className="end"> {`};`}</div>
        </div>
      </Preview>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PersonalDetails = styled.form`
  display: grid;
  max-width: 500px;

  label {
    display: grid;
  }
`;

const Preview = styled.section`
  height: 100vh;

  .preview-page {
  }
`;

const Heading = () => {
  const [heading, setHeading] = useState({
    fullName: "Jariel Arias",
    title: "Full Stack Web Developer",
    email: "Jariel@gmail.com",
    phoneNumber: "Jariel Arias",
  });

  return (
    <div className="heading-section">
      <div className="title">
        <div className="full-name">Jariel Arias</div>
        <div className="start">{`{`}</div>
      </div>
      <div className="personal-info">
        <div>
          // <span className="personal title">{heading.title}</span>
        </div>
        <div>
          // <span className="personal email">{heading.email}</span>
        </div>
        <div>
          //{" "}
          <span className="personal phone-number">{heading.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};
