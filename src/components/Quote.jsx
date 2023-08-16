import React from "react";

function Quote() {
  return (
    <div className="container mt-4">
      <blockquote className="blockquote text-center">
        <p className="mb-0">Your quote here</p>
        <footer className="blockquote-footer">Author</footer>
      </blockquote>
    </div>
  );
}

export default Quote;
