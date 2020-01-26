import React from "react";

const allMessages = [
  { id: 1, title: "message001", content: "Html" },
  { id: 2, title: "message002", content: "Css" },
  { id: 3, title: "message003", content: "JavaScript" },
  { id: 4, title: "message004", content: "Php" },
  { id: 5, title: "message005", content: "React" },
  { id: 6, title: "message006", content: "Redux" }
];

function MessageDetail(props) {
  const result = allMessages.find(
    message => message.id === props.match.params.id * 1
  );
  return (
    <ul>
      <li>ID:{result.id}</li>
      <li>Title:{result.title}</li>
      <li>Content:{result.content}</li>
    </ul>
  );
}

export default MessageDetail;
