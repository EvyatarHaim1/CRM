import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import {FaRegEnvelope} from 'react-icons/fa';
@inject('ans','cs')
@observer
class EmailSent extends Component {
   
   countEmailSent=()=>{
       return this.props.cs.clients.filter(e=>e.emailType).length
       
   }
   
    render() {
        return (
            <div className="emailsSent">
                <FaRegEnvelope className="emailIcon" />
                <span className="emailsNum">{this.countEmailSent()}</span>
                <h6 className="EmailsText"> Emails Sent </h6>
            </div>
        );
    }
}

export default EmailSent;