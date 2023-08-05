import { styled } from "styled-components";
import "./index.css";

const HeadingEditor = (props) => {
  const setHeading = props.setHeading;
  console.log(setHeading);
  const handleChange = (e) => {
    const targetName = e.target.name;
    setHeading((prev) => ({ ...prev, [targetName]: e.target.value }));
  };

  return (
    <StyledHeadingEditor className="personal-details-input">
      <label htmlFor="fullName">
        Full Name
        <input type="text" name="fullName" onChange={handleChange} />
      </label>
      <label htmlFor="jobTitle">
        Job Title
        <input type="text" name="jobTitle" onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label htmlFor="phoneNumber">
        <div>
          Phone Number <i>recommended</i>
        </div>
        <input type="text" name="phoneNumber" onChange={handleChange} />
      </label>
      <label htmlFor="address">
        <div>
          Address <i>recommended</i>
        </div>
        <input type="text" name="location" onChange={handleChange} />
      </label>
    </StyledHeadingEditor>
  );
};

export default HeadingEditor;

const StyledHeadingEditor = styled.form`
  display: grid;
  max-width: 500px;

  label {
    display: grid;
  }
`;
