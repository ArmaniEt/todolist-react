import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import TaskForm from './AddTaskForm/AddTaskForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <TaskForm/>
        </Container>
      </div>
    );
  }
}

export default App;
