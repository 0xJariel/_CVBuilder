import { styled } from "styled-components";
import "./index.css";

const EducationEditor = ({ degreeList, setDegreeList }) => {
  const handleChange = (e) => {
    console.log(e.target);
    console.log(e);
  };

  const newDegree = (e) => {};

  const deleteDegree = (e) => {
    e.preventDefault();
    const key = e.currentTarget.parentElement.id;
    setDegreeList((prev) => {
      prev.filter((item) => item.key !== key);
    });
  };

  const labelMaker = (listItem) => {
    const labels = [];

    for (const propName in listItem) {
      if (propName == "key") {
        // ! instead of return
        continue;
      } else {
        labels.push(
          <label htmlFor={propName} key={propName} id={propName}>
            {propName}
            <input type="text" name={propName} onChange={handleChange} />
          </label>
        );
      }
    }

    return labels;
  };

  const formMaker = (list) => {
    return list.map((i) => {
      return (
        <form className="educationForm" key={i.key} id={i.key}>
          {labelMaker(i)}
          <button onClick={deleteDegree}>Delete</button>
        </form>
      );
    });
  };
  const forms = formMaker(degreeList);

  return <StyledEducationEditor>{forms}</StyledEducationEditor>;
};

export default EducationEditor;

const StyledEducationEditor = styled.section`
  display: grid;
  max-width: 500px;

  label {
    display: grid;
  }
`;
