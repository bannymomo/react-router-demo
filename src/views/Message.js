import React from "react";
class Message extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    // mock ajax request (async)
    setTimeout(() => {
      const messages = [
        { id: 1, title: "message001" },
        { id: 2, title: "message002" },
        { id: 3, title: "message003" },
        { id: 4, title: "message004" },
        { id: 5, title: "message005" },
        { id: 6, title: "message006" }
      ];
      this.setState({ messages });
    }, 1000);
  }

  render() {
    return (
      <ul>
        {this.state.messages.map((message, index) => {
          return (
            <li key={index}>
              <a href={index}>{message.title}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Message;
