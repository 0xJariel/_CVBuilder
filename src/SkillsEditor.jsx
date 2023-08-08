import { styled } from "styled-components";
import uuid from "react-uuid";
import "./index.css";

const SkillsEditor = ({ skillsList, setSkillsList }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    console.log(name);
    const key = e.target.parentElement.parentElement.id;
    setSkillsList((prev) => {
      // Find the index of the object with the matching "key"
      const index = prev.findIndex((skill) => skill.key === key);

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

  const newSkill = (e) => {
    e.preventDefault();
    const skillObject = {
      title: "",
      school: ``,
      start: "",
      end: "",
      key: uuid(),
    };

    setSkillsList((prev) => {
      return [...prev, skillObject];
    });
  };

  const deleteSkill = (e) => {
    e.preventDefault();
    const key = e.currentTarget.parentElement.id;
    setSkillsList((prev) => {
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
        <form className="section-form" key={i.key} id={i.key}>
          {labelMaker(i)}
          <button onClick={deleteSkill}>Delete</button>
        </form>
      );
    });
  };
  const form = formMaker(skillsList);

  return (
    <StyledSkillsEditor className="input-section">
      <div className="title">
        <h2 className="editorHeading">Skills</h2>
        <button onClick={newSkill}>+</button>
        <div className="carrot">{`<`}</div>
      </div>
      {form}
    </StyledSkillsEditor>
  );
};

export default SkillsEditor;

const StyledSkillsEditor = styled.div`
  display: grid;
  max-width: 500px;

  label {
    display: grid;
  }
`;
