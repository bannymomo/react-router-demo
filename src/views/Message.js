import React from "react";
import { Route, NavLink } from "react-router-dom";
import MessageDetail from "./MessageDetail";
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

  handlePushClick = id => {
    this.props.history.push(`/home/message/message-detail/${id}`);
  };

  handleReplaceClick = id => {
    this.props.history.replace(`/home/message/message-detail/${id}`);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  goForward = () => {
    this.props.history.goForward();
  };

  render() {
    return (
      <div className="message-container">
        <ul className="lists">
          {this.state.messages.map((message, index) => {
            return (
              <li className="list" key={index}>
                <NavLink to={`/home/message/message-detail/${message.id}`}>
                  {message.title}
                </NavLink>
                <button
                  onClick={() => {
                    this.handlePushClick(message.id);
                  }}
                >
                  Push()
                </button>
                <button
                  onClick={() => {
                    this.handleReplaceClick(message.id);
                  }}
                >
                  Replace()
                </button>
              </li>
            );
          })}
          <p>
            <button onClick={this.goBack}>Back</button>
            <button onClick={this.goForward}>Forward</button>
          </p>
        </ul>
        <ul className="list-detail">
          <Route
            path={`/home/message/message-detail/:id`}
            component={MessageDetail}
          />
        </ul>
      </div>
    );
  }
}

export default Message;
