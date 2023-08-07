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
    <StyledHeadingEditor className="input-section">
      <div className="title">
        <h2 className="editorHeading">Personal Details</h2>
        <div className="carrot">{`<`}</div>
      </div>
      <form action="" className="input-form">
        <label htmlFor="fullName">
          <span className="label-text">Full Name</span>
          <input type="text" name="fullName" onChange={handleChange} />
        </label>
        <label htmlFor="jobTitle">
          <span className="label-text">Job Title</span>
          <input type="text" name="jobTitle" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          <span className="label-text">Email</span>
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="phoneNumber">
          <span className="label-text">
            Phone Number <i>recommended</i>
          </span>
          <input type="text" name="phoneNumber" onChange={handleChange} />
        </label>
        <label htmlFor="address">
          <span className="label-text">
            Location <i>recommended</i>
          </span>
          <input type="text" name="location" onChange={handleChange} />
        </label>
      </form>
    </StyledHeadingEditor>
  );
};

export default HeadingEditor;

const StyledHeadingEditor = styled.div`
  display: grid;
  max-width: 500px;
  background-color: #181a1b;
  justify-self: center;
  width: 100%;
  padding: 20px 15px;
  gap: 20px;
  border-radius: 12px;
`;
