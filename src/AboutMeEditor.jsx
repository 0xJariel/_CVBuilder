import React from "react";
import { styled } from "styled-components";

function AboutMeEditor(props) {
  const setAboutMe = props.setAboutMe;
  const handleChange = (e) => {
    setAboutMe(e.target.value);
  };
  return (
    <label>
      <h2>Short Bio</h2>
      <input type="text" name="bio" onChange={handleChange} />
    </label>
  );
}

export default AboutMeEditor;

const StyledAboutMe = styled.label``;
