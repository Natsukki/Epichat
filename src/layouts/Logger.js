import React from "react";
import { connect } from "react-redux";
import LoginLayout from "./authentication/Login";
import Messages from "./Messages";

const Logger = (Login, Messages) => (props) => {
    const { isLoggedIn } = props;

    if (!isLoggedIn)
        return <Login />;
    else
        return <Messages />;
};

const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn
});

export default connect(mapStateToProps)(Logger(LoginLayout, Messages));