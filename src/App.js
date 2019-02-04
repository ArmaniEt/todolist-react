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
                                id={element.id}
                                key={element.id}
                                text = {element.text}
                                onDeleteTask = {() => this.deleteOnClick(element.id)}
                                isTaskDone = {() => this.isDone(element.id)}
                                status = {element.status} // pass bool value of current status
                            >
                            </Task>
                        })
                    }
                </Container>
            </div>
        );
    }

    state = {
        tasks: [
            {text: 'Some random task number one', id: 1, status: false},
            {text: 'Some random task number two', id: 2, status:false}
            ],
        currentTask: {text: '', id: null, status: false}
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
                id: null,
                status: false
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
    };

    isDone = (id) => {
        let taskId = this.state.tasks.findIndex(task => {return task.id === id});

        const tasks = [...this.state.tasks];
        tasks[taskId].status = !this.state.tasks[taskId].status;

        this.setState({tasks});

        //find a task to switch a task by id
        //unpacked that task, change status of that task
        //set state with changed task

    }

}


// need to do status
// each task should have status with default value: false
// we could write a method that switch our status to true
// we should see how to do if statements in our tasks


export default App;
