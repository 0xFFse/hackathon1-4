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
		const backendUrl = 'http://hackathon1-2.0xff.se:3000/messages';
		
		console.log('Getting messages');
		axios.get(backendUrl)
    .then(res => {
    	console.log(res.data);
     	this.setState({'messages' : res.data});
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
