import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.increment = this.increment.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value;
  }

  increment() {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Value: {this.state.value}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;

