import React, { PropTypes, Component } from 'react';
import { mailers } from '../constants/mailers';
import ButtonSendMessage from '../components/buttonSendMessage.jsx';

var mailersList = mailers.map(function(mailer, index) {
    return <option value={mailer} key={index}>{mailer}</option>;
});

class SelectMailer extends Component {
    render() {
        return (
            <div className="mailer">
                <p>Выберите одно из предложенных имен:</p>
                <select className="select-mailer">
                    {mailersList}
                </select>
                <ButtonSendMessage />
            </div>
        )
    }
}

export default SelectMailer;