import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    return <MessageLayout messages={this.props.messages} onSubmit={this.handleSubmitMessage.bind(this)}/>;
  }
}

export default connect(mapStateToProps)(Messages);
