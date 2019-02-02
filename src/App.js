import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import TaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
            <TaskForm/>
            <Task/>
        </Container>
      </div>
    );
  }
}

export default App;
