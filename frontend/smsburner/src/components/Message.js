import React, { Component } from 'react';
import Moment from 'react-moment';

class Message extends Component {
  
	render() {
    const { message } = this.props;
    return (
      <div className={'row'}>
        <div className={'from'}>
          <span>{ message.from }</span>
        </div>
        <div className={'message'}>
          <span>{ message.message }</span>
        </div>
        <div className={'received_at'}>
          <span><Moment format="DD/MM-YYYY HH:mm">{ message.received_at }</Moment></span>
        </div>
      </div>
    );
  }
}

export default Message;
