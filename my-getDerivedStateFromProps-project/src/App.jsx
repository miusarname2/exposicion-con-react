import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.initialValue !== prevState.value) {
      return { value: nextProps.initialValue };
    }
    return null;
  }

  render() {
    return <p>Value: {this.state.value}</p>;
  }
}

export default App;
