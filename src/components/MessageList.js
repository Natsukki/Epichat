import React from "react";
import { Timeline } from "antd";

const MessageList = ({ messages }) => (
    <Timeline>
        {messages.map((value, index) => (
            <Timeline.Item key={index}  >
                <em style={{color: '#9ACD32'}}>[{(new Date().toLocaleString())}] </em>  <strong style={{color: '#6495ED'}}>{"student"}</strong> : {value.text}
            </Timeline.Item>
        ))}
    </Timeline>
);
export default MessageList;
