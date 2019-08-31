import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import SimpleSlider from './slider';

class App extends React.Component {
  state = {
    todo: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/todo')
      .then(response => response.json())
      .then(result => this.setState({...this.state, todo: result}))
      .catch(err => {throw err})
  }
  render() {
    return (
      <div className="App1">
        <AddTodo/>
        <SimpleSlider/>
      </div>
    );
  }
}

export default App;
