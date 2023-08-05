import { styled } from "styled-components";

const AboutMe = (props) => {
  return (
    <StyledAboutMe>
      <div>{`About Me {`}</div>
      {props.aboutMe}
      <div>{`}`}</div>
    </StyledAboutMe>
  );
};

export default AboutMe;

const StyledAboutMe = styled.div``;
