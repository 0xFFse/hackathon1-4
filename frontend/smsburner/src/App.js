import React, { Component } from 'react';
import MessagesList from './components/MessagesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SMS Burner</h1>
        </header>
        <div className={'container'}>
          <MessagesList />
        </div>
      </div>
    );
  }
}

export default App;
