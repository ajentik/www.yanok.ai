import React from "react";

export default function SolutionsLayout({ title, children }) {
  return (
    <div className="solutions-layout">
      {title && <h1>{title}</h1>}
      <div>{children}</div>
    </div>
  );
}
