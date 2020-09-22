import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Header from './Header'
import Todos from './Todos'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { v4 as uuidv4 } from 'uuid';
import About from './About'
import axios from 'axios'

export default class App extends Component {

  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({
        todos: res.data
      }))
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo;
      })
    })
  }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(
        todo=>todo.id!==id
      )]}));
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      name: "deepak",
      title,
      isCompleted: true
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))

  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={
            props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
          <Route exact path="/About" component={About} />
        </div>
      </Router>
    )
  }
}
