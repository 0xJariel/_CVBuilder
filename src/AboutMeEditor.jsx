import React from "react";
import { styled } from "styled-components";

function AboutMeEditor(props) {
  const setAboutMe = props.setAboutMe;
  const handleChange = (e) => {
    setAboutMe(e.target.value);
  };
  return (
    <div className="input-section">
      <div className="title">
        <h2>About Me</h2>
        <div className="carrot">{`<`}</div>
      </div>
      <form action="" className="input-form">
        <label>
          <input type="text" name="bio" onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default AboutMeEditor;

const StyledAboutMe = styled.label``;
