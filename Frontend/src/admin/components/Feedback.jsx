import React from "react";

function Feedback({ error, success }) {
  if (!error && !success) return null;

  return (
    <div
      className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
        error
          ? "border-red-200 bg-red-50 text-red-700"
          : "border-[#d7a642]/40 bg-[#fff7df] text-[#62543f]"
      }`}
    >
      {error || success}
    </div>
  );
}

export default Feedback;
