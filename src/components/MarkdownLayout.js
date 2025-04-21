import React from "react";

export default function MarkdownLayout({ title, description, children }) {
  return (
    <div className="markdown-layout">
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  );
}
