import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import TaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <TaskForm addTask={this.addOnClick}
                              task={this.state.currentTask}
                              onChangeTask = {this.changedTask}
                              addOnClickDisabled = {this.isAddOnClickDisabled()}
                    />
                    {this.state.tasks.map((element) => {
                            return <Task
                                key={element.id}
                                text = {element.text}
                                onDeleteTask = {() => this.deleteOnClick(element.id)}
                            >
                            </Task>
                        })
                    }
                </Container>
            </div>
        );
    }

    state = {
        tasks: [{text: 'Some random task number one', id: 1}, {text: 'Some random task number two', id: 2}],
        currentTask: {text: '', id: null}
    };


    changedTask = (event) => {
        let text = event.target.value;


        let currentTask = {
            ...this.state.currentTask,
            text: text,
        };

        this.setState({
            ...this.state,
            currentTask
        })

    };

    addOnClick = (event) => {
        event.preventDefault();

        let date = new Date();
        let id = date.getTime();
        let task = {...this.state.currentTask};
        task.id = id;

        let tasks = [...this.state.tasks, task]; // added task to tasks array
        this.setState({
            ...this.state,
            tasks,
            currentTask: {
                text: '',
                id: null
            }
        }); // added new tasks array to state


    };

    isAddOnClickDisabled = () => {
        return this.state.currentTask.text === '';
    };

    deleteOnClick = (id) => {
        let taskId = this.state.tasks.findIndex(task => {return task.id === id});
        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    }

}





export default App;
