import React from 'react';
import {Card, Button, CardText, Row, Col} from 'reactstrap';

const Task = (props) => {
    return (
        <Row className="mt-3">
            <Col sm="12">
                <Card body>
                    <CardText>{props.text}</CardText>
                    <Button onClick={props.onDeleteTask} size="sm">Delete task</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Task;