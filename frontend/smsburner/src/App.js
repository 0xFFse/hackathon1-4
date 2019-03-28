import React, { Component } from 'react';
import MessagesList from './components/MessagesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><img src="https://img.icons8.com/doodle/48/000000/fire-element.png" /> SMS Burner <img src="https://img.icons8.com/doodle/48/000000/fire-element.png" /></h1>
          <div>
            <img src="https://img.icons8.com/doodle/48/000000/phone.png" />
            <h2>+46 76 90 50 614</h2>
          </div>
          <p>(Refreshes automatically every 5 seconds)</p>
        </header>
        <div className={'container'}>
          <MessagesList />
        </div>
      </div>
    );
  }
}

export default App;
