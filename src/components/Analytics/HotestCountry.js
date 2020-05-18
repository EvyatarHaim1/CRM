import React, { Component } from 'react';
import {FaGlobeAmericas} from 'react-icons/fa';
import { inject,observer } from 'mobx-react';

@inject('ans')
@observer
class HotestCountry extends Component {
   componentDidMount=()=>{
    this.props.ans.getHotestCountry()
   }
    render() {
        
        return (
            <div className="hotestCountry">
                <FaGlobeAmericas className='globus' /> 
                <span className='sss'>{this.props.ans.hotestCountry}</span>
                <h6 className="hottestTitle"> Hotest Country</h6>
            </div>
        );
    }
}

export default HotestCountry;