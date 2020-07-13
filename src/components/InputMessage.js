import React from "react";
import { Input } from "antd";

const Search = Input.Search;
class InputMessage extends React.Component {
    static defaultProps = { onSubmit: () => {}, value: "" }

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    render() {
        return <Search
            placeholder="input message"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSearch={value => {
                if (value)
                    this.props.onSubmit(value);
                this.setState({ value: "" });
            }}
            enterButton="Send"
            allowClear
        />
    }
}


export default InputMessage;
