import React from 'react';
import CounterGroup from './components/CounterGroup/CounterGroup';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  render() {

    return (
      <div className="App">
        <CounterGroup defaultNum={3}/>
      </div>
    );
  }

}

export default App;
