import { styled } from "styled-components";
import "./index.css";

const EducationEditor = (props) => {
  const degreeList = props.degreeList;
  const setDegreeList = props.setDegreeList;

  const handleChange = (e) => {
    console.log(`I'm secretly changing!`);
  };

  const labelMaker = (listItem) => {
    const labels = [];

    for (const propName in listItem) {
      labels.push(
        <label htmlFor={propName} key={propName}>
          {propName}
          <input
            type="text"
            name={propName}
            onChange={handleChange}
            value={listItem[propName]}
          />
        </label>
      );
    }

    return labels;
  };

  const btnMaker = (listItem) => {};

  const createForms = (list) => {
    return list.map((i, index) => {
      const handleChange = () => {};
      console.log(list);
      return (
        <form className="EducationEditor" key={index}>
          {labelMaker(i)}

          <div>
            <button>Delete</button>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      );
    });
  };
  const forms = createForms(degreeList);

  const addDegree = (e) => {};
  const deleteDegree = (e) => {};

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
