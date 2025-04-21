import React from "react";

export default function PageLayout({ title, description, children }) {
  return (
    <div className="page-layout">
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  );
}
