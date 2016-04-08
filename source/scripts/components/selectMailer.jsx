import React, { PropTypes, Component } from 'react';
import { mailers } from '../constants/mailers';
import ButtonSendMessage from '../components/buttonSendMessage.jsx';

var mailersList = mailers.map(function(mailer, index) {
    return <option value={mailer} key={index}>{mailer}</option>;
});

class SelectMailer extends Component {
    onSelectMailer(e) {
        this.props.selectMailer(e.target.options[ e.target.selectedIndex ].text);
    }

    render() {
        const { sendMessage } = this.props;

        return (
            <div className="mailer">
                <p>Выберите одно из предложенных имен:</p>
                <select className="select-mailer" onChange={::this.onSelectMailer}>
                    {mailersList}
                </select>
                <ButtonSendMessage sendMessage={ sendMessage }  />
            </div>
        )
    }
}

export default SelectMailer;