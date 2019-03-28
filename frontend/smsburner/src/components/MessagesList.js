import React, { Component } from 'react';
import Message from './Message';
import axios from 'axios';

class MessagesList extends Component {

	constructor(props) {
  	super(props);
  	this.state = { 
  		messages: []
  	};
  }
  
	componentDidMount() {
		// Get initial set of messages
    this.getMesssages();
    // Get messages every 5 sec
    this.interval = setInterval(() => {
    	this.getMesssages();
    }, 5000);
  }

  componentWillUnmount() {
  	// Stop inverval on unmount
  	clearInterval(this.interval)
	}

	// Get messages from backend
	getMesssages = function() {
		const backendUrl = 'http://localhost:3000/';
		
		console.log('Getting messages');
		axios.get(backendUrl)
    .then(res => {
    	// Just temp stuff.
    	console.log('TODO: replace with real data');
    	const messages = [{
				'from' : '+4622345678',
				'message' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622346578',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622346578',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			},{
				'from' : '+4622345678',
				'message' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622346578',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}, {
				'from' : '+4622345678',
				'message' : 'This is the message content',
				'received_at' : new Date().toISOString()
			}];
     	this.setState({'messages' : messages});
    });
	}

	render() {
		return (
      <div className={'messagelist-container'}>
      	{ this.state.messages.map((object, i) => {
        	return <Message message={object} key={i} />;
    		}) }
      </div>
    );
  }
}

export default MessagesList;
