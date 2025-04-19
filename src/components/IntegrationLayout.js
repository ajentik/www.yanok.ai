import React from "react";

export default function IntegrationLayout({ title, children }) {
  return (
    <div className="integration-layout">
      {title && <h1>{title}</h1>}
      <div>{children}</div>
    </div>
  );
}
