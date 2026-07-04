import React from "react";

function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="admin-card flex flex-col items-center justify-center px-6 py-14 text-center">
      <p className="text-xl font-black text-[#24211f]">{title}</p>
      <p className="mt-2 max-w-md text-[#70665c]">{description}</p>
      {actionLabel && (
        <button className="admin-button-primary mt-6" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
