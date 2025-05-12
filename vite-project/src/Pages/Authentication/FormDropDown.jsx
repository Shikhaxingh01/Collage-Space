import React from "react";
import PropTypes from "prop-types";

export const FormDropDown = ({ label,id,name, options, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-montserrat text-gray-300">
        {label}
      </label>
      <select
      id={id}
      name={name}
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="bg-gray-700 text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

FormDropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Example usage
// <FormDropdown label="Select Role" options={["Student", "Club Lead"]} />
