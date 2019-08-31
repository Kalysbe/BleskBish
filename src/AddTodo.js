import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component {
  state = {
    name: '',
    phone:'',
    email:'',
    comment:'',
  }
  handleInputName = (event) => {
    const eventType = event.target.name;
    console.log(event.target)
    const val = event.target.value;
    switch(eventType) {
      case "name":
        this.setState({...this.state, name: val})
    }
    switch(eventType) {
      case "phone":
        this.setState({...this.state, phone: val})
    }
    switch(eventType) {
      case "email":
        this.setState({...this.state, email: val})
    }
    switch(eventType) {
      case "comment":
        this.setState({...this.state, comment: val})
    }
  }
  addTodo = () => {
    fetch('http://localhost:3000/todo',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
  }
  render(){
    return(
        <div className="App">
    <div className="window">
      <input name="name" onChange={this.handleInputName} value={this.state.name} className="input" placeholder="Имя"/>
      <input name="phone" onChange={this.handleInputName} value={this.state.phone} className="input" placeholder="Телефон"/>
      <input name="email" onChange={this.handleInputName} value={this.state.email} className="input" placeholder="Email"/>
      <input name="comment" onChange={this.handleInputName} value={this.state.comment} className="text" placeholder="Комментарий"/>
      <button onClick={this.addTodo} className="button">Отправить заявку</button>
    </div>
    </div>
    );
  }
}

export default AddTodo;