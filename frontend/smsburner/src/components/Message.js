import React, { Component } from 'react';

class Message extends Component {
  
	render() {
    const { message } = this.props;
    return (
      <div className={'row'}>
        <div>
          <span>{ message.from }</span>
        </div>
        <div>
          <span>{ message.message }</span>
        </div>
        <div>
          <span>{ message.received_at }</span>
        </div>
      </div>
    );
  }
}

export default Message;
