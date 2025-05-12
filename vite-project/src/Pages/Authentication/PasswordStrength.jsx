import React from "react";
import PropTypes from "prop-types";

export const PasswordStrength = ({ password }) => {
  const getStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = getStrength();

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${i < strength ? (strength === 1 ? "bg-red-500" : strength === 2 ? "bg-orange-500" : strength === 3 ? "bg-yellow-400" : "bg-green-500") : "bg-gray-600"}`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-400">
        Use 8+ characters with a mix of letters, numbers & symbols
      </p>
    </div>
  );
};

PasswordStrength.propTypes = {
  password: PropTypes.string.isRequired,
};
