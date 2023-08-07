import { styled } from "styled-components";
import uuid from "react-uuid";
import "./index.css";

const ExpierenceEditor = ({ jobList, setJobList }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    console.log(name);
    const key = e.target.parentElement.parentElement.id;
    setJobList((prev) => {
      // Find the index of the object with the matching "key"
      const index = prev.findIndex((job) => job.key === key);

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

  const newJob = (e) => {
    e.preventDefault();
    const jobObject = {
      jobTitle: "Finance Director",
      companyName: "Google",
      jobStart: "",
      jobEnd: "",
      jobEnd: "",
      responsibilities: [
        { description: "", key: uuid() },
        { description: "", key: uuid() },
        { description: "", key: uuid() },
      ],
      key: uuid(),
    };

    setJobList((prev) => {
      return [...prev, jobObject];
    });
  };

  const deleteJob = (e) => {
    e.preventDefault();
    const key = e.currentTarget.parentElement.id;
    setJobList((prev) => {
      return prev.filter((item) => item.key !== key);
    });
  };

  const labelMaker = (listItem) => {
    const labels = [];

    for (const propName in listItem) {
      if (propName == "key" || propName == "responsibilities") {
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

  const handleResponsibilityChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const key = e.target.parentElement.parentElement.id;
    console.log("first");
    console.log(key);
  };

  const deleteResponsiblity = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const addResponsibility = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const descriptionMaker = (list) => {
    const responsibilityLabels = [];

    list.forEach((item) => {
      responsibilityLabels.push(
        <div key={item.key}>
          <input
            type="text"
            name="description"
            onChange={handleResponsibilityChange}
          />
          <button onClick={deleteResponsiblity}>delete</button>
        </div>
      );
    });

    return (
      <fieldset>
        <legend>Responsibilities:</legend>
        <button onClick={addResponsibility}>add description</button>
        <div>{responsibilityLabels}</div>
      </fieldset>
    );
  };

  const formMaker = (list) => {
    return list.map((i) => {
      return (
        <form className="sectionForm" key={i.key} id={i.key}>
          {labelMaker(i)}
          <div className="responsibilities">
            {descriptionMaker(i.responsibilities)}
          </div>
          <button onClick={deleteJob}>Delete</button>
        </form>
      );
    });
  };
  const forms = formMaker(jobList);

  return (
    <StyledExperienceEditor>
      <div className="title">
        <h2>Experience</h2>
        <button onClick={newJob}>+</button>
      </div>
      {forms}
    </StyledExperienceEditor>
  );
};

export default ExpierenceEditor;

const StyledExperienceEditor = styled.section`
  display: grid;
  max-width: 500px;

  label {
    display: grid;
  }
`;
