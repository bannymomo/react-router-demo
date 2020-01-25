import React from "react";

function News() {
  const newsArray = [
    "news001",
    "news002",
    "news003",
    "news004",
    "news005",
    "news006"
  ];
  return (
    <ul>
      {newsArray.map((news, index) => {
        return <li key={index}>{news}</li>;
      })}
    </ul>
  );
}

export default News;
