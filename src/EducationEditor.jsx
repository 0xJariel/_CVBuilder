import { styled } from "styled-components";
import uuid from "react-uuid";
import "./index.css";

const EducationEditor = ({ degreeList, setDegreeList }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    console.log(name);
    const key = e.target.parentElement.parentElement.id;
    setDegreeList((prev) => {
      // Find the index of the object with the matching "key"
      const index = prev.findIndex((degree) => degree.key === key);

      // If the object with the matching "key" is found, create a new array
      // with the updated object
      if (index !== -1) {
        const updatedList = [...prev]; // Create a copy of the previous array
        updatedList[index] = { ...updatedList[index], [name]: e.target.value }; // Update the "taget.name" property
        console.log(updatedList);
        return updatedList;
      }
      console.log("not found");
      // If the object with the matching "key" is not found, return the previous state
      return prev;
    });
  };

  const newDegree = (e) => {
    e.preventDefault();
    const degreeObject = {
      title: "",
      school: ``,
      start: "",
      end: "",
      key: uuid(),
    };

    setDegreeList((prev) => {
      return [...prev, degreeObject];
    });
  };

  const deleteDegree = (e) => {
    e.preventDefault();
    const key = e.currentTarget.parentElement.id;
    setDegreeList((prev) => {
      return prev.filter((item) => item.key !== key);
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

  return (
    <StyledEducationEditor>
      <div className="title">
        <h2>Education</h2>
        <button onClick={newDegree}>+</button>
      </div>
      {forms}
    </StyledEducationEditor>
  );
};

export default EducationEditor;

const StyledEducationEditor = styled.section`
  display: grid;
  max-width: 500px;

  label {
    display: grid;
  }
`;
