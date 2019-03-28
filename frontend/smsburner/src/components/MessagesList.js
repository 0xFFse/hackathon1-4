import React, { Component } from 'react';
import Message from './Message';

class MessagesList extends Component {
  
	componentDidMount() {
    console.log('Load data');
    this.interval = setInterval(() => {
    	console.log('update..');
    }, 5000);
  }

  componentWillUnmount() {
  	// Stop inverval
  	clearInterval(this.interval)
	}

	render() {
		const messages = [{
			'from' : '2345678',
			'message' : 'This is the message content',
			'received_at' : new Date().toISOString()
		}];
    return (
      <div className={'messagelist-container'}>
      	{ messages.map((object, i) => {
        	return <Message message={object} key={i} />;
    		}) }
      </div>
    );
  }
}

export default MessagesList;
