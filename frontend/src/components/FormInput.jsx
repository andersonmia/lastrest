import React from 'react';

const FormInput = ({ label, type, value, onChange, placeholder, required }) => {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        value={value}
        onChange={onChange}
        id={label}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;