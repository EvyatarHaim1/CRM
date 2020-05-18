import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import {FaUserCircle} from 'react-icons/fa';
@inject('ans','cs')
@observer
class OutstandingClients extends Component {
    
    unSold=()=>{
        let unSold=this.props.cs.clients.filter(e => !e.sold)
        return unSold.length
    }
    
    render() {
        return (
            <div className="outstandingContainer">
                <FaUserCircle className='outstandingIcon' />
                <span className="unsoldNum">{this.unSold()}</span>
                <h6 className="outstandingText"> Outstanding Clients </h6>
            </div>
        );
    }
}

export default OutstandingClients;