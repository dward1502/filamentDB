import React from "react";
import { components } from "react-select";

const DropdownOptions = (props) => {
  return (
    <Fragment>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={() => null}
        />
      </components.Option>
      <label>{props.label}</label>
    </Fragment>
  );
};

export default DropdownOptions;
