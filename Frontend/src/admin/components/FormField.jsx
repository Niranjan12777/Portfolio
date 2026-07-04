import React from "react";

function FormField({ label, name, value, onChange, type = "text", textarea = false, placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-black text-[#24211f]">
      {label}
      {textarea ? (
        <textarea
          className="admin-input min-h-32"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="admin-input"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

export default FormField;
