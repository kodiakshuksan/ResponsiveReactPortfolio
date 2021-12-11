import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';


const Resume = () => {
    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Jennifer Detmering</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full Stack Web Developer</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Resume
