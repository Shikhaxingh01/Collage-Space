import React from "react";
import PropTypes from "prop-types";

export const FormInput = ({ label,id,name, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-montserrat text-gray-300">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className="  w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        {...props}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};
