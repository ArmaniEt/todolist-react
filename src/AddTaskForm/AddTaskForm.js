import React from 'react';
import {Form, Input, Button} from 'reactstrap';
import {Row, Col} from 'reactstrap';

export default class TaskForm extends React.Component {
    render() {
        return (

            <Form className='mt-4'>
                <Row xs={12}>
                    <Col xs={9}>
                        <Input placeholder="Add a new task" bsSize="lg"/>
                    </Col>
                    <Col xs={3}>
                        <Button outline color="success" size="lg" block>Add Task</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}