import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class InputMessage extends Component {
    writeMessage(e) {
        let val = e.target.value.trim();

        if (val.length) {
            console.log(ReactDOM.findDOMNode(this.refs.inputMessage).value);
            this.props.addMessage(e.target.value);
        }
    }

    render() {
        return (
            <textarea
                className="input-message"
                defaultValue=""
                ref="inputMessage"
                placeholder="Введите Ваше сообщение"
                onBlur={ ::this.writeMessage }>
            </textarea>
        )
    }
}

export default InputMessage;