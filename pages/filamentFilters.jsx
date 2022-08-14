import React, { useState, useId } from "react";
import ReactSelect from "react-select";

import Checkbox from "../components/UI/Checkbox";
import Card from "../components/UI/Card";
// import DropdownOptions from "../components/UI/DropdownOptions";

import styles from "./filament.module.scss";

const info_type = [
  {
    name: "types",
    id: "pla",
    value: "PLA",
  },
  {
    name: "types",
    id: "pteg",
    value: "PTEG",
  },
];
const info_color = [
  {
    name: "color",
    id: "red",
    value: "Red",
  },
];
const info_finish = [{ name: "finish", id: "glossy", value: "Glossy" }];
const info_location = [{ name: "location", id: "china", value: "China" }];

const colourOptions = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const filamentFilters = () => {
  const [item, setItem] = useState({
    filtered: [],
  });
  const [selectedBrands, setSelectedBrands] = useState();

  const checkBrandHandler = (brand) => {
    setSelectedBrands(brand);
  };

  const checkedHandler = (event) => {
    const { value, checked } = event.target;
    const { filtered } = item;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setItem({ filtered: [...filtered, value] });
    } else {
      setItem({
        filtered: filtered.filter((event) => event !== value),
      });
    }
  };

  const onSearch = () => {
    console.log(JSON.stringify(item));
    console.log(JSON.stringify(selectedBrands));
  };

  const customStyles = {
    input: (provided) => ({
      ...provided,
      fontSize: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: 15,
      padding: 20,
    }),
  };

  return (
    <div className={styles.main}>
      <section className={styles.filters}>
        <h1>Basic Filters</h1>

        <h3>Filter by Brand</h3>
        <div className={styles.dropdown_container}>
          <ReactSelect
            options={colourOptions}
            placeholder="Select Brand"
            value={selectedBrands}
            onChange={checkBrandHandler}
            isSearchable={true}
            isMulti
            instanceId={useId()}
            styles={customStyles}
          />
        </div>

        {/* <ReactSelect
            options={colourOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ DropdownOptions }}
            onChange={checkBrandHandler}
            allowSelectAll={true}
            className="basic-multi-select"
            classNamePrefix="select"
            value={brand}
          /> */}

        <h3>Filament Type</h3>
        {info_type.map((item, index) => {
          return (
            <Checkbox
              key={index}
              name={item.name}
              id={item.id}
              value={item.value}
              checked={checkedHandler}
            />
          );
        })}

        <h3>Color / Appearance</h3>
        {info_color.map((item, index) => {
          return (
            <Checkbox
              key={index}
              name={item.name}
              id={item.id}
              value={item.value}
              checked={checkedHandler}
            />
          );
        })}

        <h3>Finish</h3>
        {info_finish.map((item, index) => {
          return (
            <Checkbox
              key={index}
              name={item.name}
              id={item.id}
              value={item.value}
              checked={checkedHandler}
            />
          );
        })}

        <h3>Manufactured Location</h3>
        {info_location.map((item, index) => {
          return (
            <Checkbox
              key={index}
              name={item.name}
              id={item.id}
              value={item.value}
              checked={checkedHandler}
            />
          );
        })}

        <h3>Size</h3>

        <button onClick={onSearch}>Search</button>
      </section>

      <section className={styles.filaments}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </section>
      <aside className={styles.addSpace}></aside>
    </div>
  );
};

export default filamentFilters;
