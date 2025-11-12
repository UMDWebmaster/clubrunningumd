import React from "react";
import Login from "../components/Login";

export default function Blog() {
  return (
    <div className="page-shell">
      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Blog Admin</span>
          <h1 className="page-title">Editor Login</h1>
          <p className="page-subtitle">
            Access the Maryland Club Running blog editor by signing in below.
          </p>
        </header>
        <Login />
      </div>
    </div>
  );
}
