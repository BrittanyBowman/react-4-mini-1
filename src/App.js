import React, { Component } from 'react';
import {
    HashRouter,
    // BrowserRouter,
    Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import routes from './routes';

class App extends Component {
  // This can be really annoying to use:
  // state = {
  //   currentRoute: 1,
  // };

  // switchRoute(num) {
  //   this.setState({
  //     currentRoute: num,
  //   })
  // }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <Link to="/login">To Route 1</Link>
              <Link to="/2">To Route 2</Link>
              <Link to="/3">To Route 3</Link>
            </nav>
            {/* <Route path="/1" render={() => <p>Route 1 shown</p>} /> */}
            <img src={logo} className="App-logo" alt="logo" />
            <div className="view">
              {routes}
            </div>
          </header>
        </div>
      </HashRouter>
    );
  }

  exampleOfSwitchStatement() {
    const someVar = '';

    switch(someVar) {
      case '99 bottles of beer':
        console.log('on the wall!');
        break;
      
      case 'foo':
        console.log('blah');
        break;
      
      default:
        console.log('😭');
    }
  }
}

export default App;
