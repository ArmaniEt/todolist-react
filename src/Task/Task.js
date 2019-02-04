import React from 'react';
import {Card, Button, CardText, Row, Col, CustomInput, Form, Label} from 'reactstrap';


const Task = (props) => {
    return (
        <Row className="mt-3">
            <Col sm="12">
                <Card body>
                    <CardText>{props.text}</CardText>
                    <Button onClick={props.onDeleteTask} size="sm">Delete task</Button>
                    <Form>
                        <Row xs={12}>
                            <Col sm={12}>
                                <Label for={props.id} className="mt-2" check>
                                    <CustomInput id={props.id} onChange={props.isTaskDone} type="checkbox"/>
                                    {props.status ? <p>Done</p> : <p>In progress</p>}
                                </Label>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Task;