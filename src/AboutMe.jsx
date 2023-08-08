import { styled } from "styled-components";

const AboutMe = (props) => {
  return (
    <StyledAboutMe className="preview-section">
      <div>{`About Me {`}</div>
      <div className="preview-section-content">{props.aboutMe}</div>
      <div>{`}`}</div>
    </StyledAboutMe>
  );
};

export default AboutMe;

const StyledAboutMe = styled.div``;
