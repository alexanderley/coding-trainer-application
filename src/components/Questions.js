import { useState } from "react";
import RandomQuestion from "./RandomQuestion";
import Select from "react-select";

// UI Components
import Card from "../UI/Card";

const customSelectStyles = {
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "var(--green)" : "white",
    color: state.isFocused ? "white" : "black",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "var(--green)",
    color: "black",
    borderColor: "var(--green)",
    fontSize: "16px",

    padding: "10px",
    "&:hover": {
      borderColor: state.isFocused ? "var(--green)" : "var(--green)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    fontSize: "16px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "white",
    fontSize: "16px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    margin: "0px",
    backgroundColor: "#136c57",
    fontSize: "16px",
  }),
  menuList: (base) => ({
    ...base,
    margin: "0px",
    backgroundColor: "#136c57",
  }),
};

const options = [
  { value: "js", label: "JavaScript" },
  { value: "react", label: "ReactJS" },
];

const Questions = () => {
  const [selectedValue, setSelectedValue] = useState("JavaScript");

  // function handleChangeQuestion(event, selectedValue) {
  //   // this works for ths select we created by ourselfs
  //   setSelectedValue(event.target.value);
  //   console.log(selectedValue);
  // }
  // react-select
  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    console.log("selected value becomes: ", selectedValue);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "bold" }}>
        My <span style={{ color: "var(--red)" }}>Coding</span> Trainer
      </h1>
      <p style={{ fontWeight: "bold" }}>Select Topic:</p>
      <div style={{ display: "flex", marginBottom: "50px" }}>
        <Select
          value={selectedValue}
          onChange={handleChange}
          options={options}
          styles={customSelectStyles}
          isSearchable={false}
          placeholder={selectedValue}
        ></Select>
      </div>

      <Card>
        <RandomQuestion select={selectedValue.value} />
      </Card>
    </div>
  );
};

export default Questions;
