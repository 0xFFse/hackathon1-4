import React, { Component } from 'react';
import Moment from 'react-moment';

class Message extends Component {
  
	render() {
    const { message } = this.props;
    return (
      <div className={'row'}>
        <div className={'from'}>
          <span>{ message.sender }</span>
        </div>
        <div className={'message'}>
          <span>{ message.text }</span>
        </div>
        <div className={'received_at'}>
          <span>
            <Moment format="DD/MM-YYYY HH:mm">
              { message.timestamp }
            </Moment>
          </span>
        </div>
      </div>
    );
  }
}

export default Message;
