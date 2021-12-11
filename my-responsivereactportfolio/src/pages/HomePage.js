import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


 
  export default function Home() {


    return (
        <main>
            <div>
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Jennifer Detmering</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Full Stack Web Developer</Card.Subtitle>
                                    <Card.Text>
                                        Full stack web developer holding a Masters Degree in Psychology with years of professional medical 
                                        experience, business ownership, and problem solving. I am passionate about forging these two interests into 
                                        applicable, accessible, and responsive web products using the MERN Stack. My own personal business background lends 
                                        special expertise and insight when developing applications that will give your completed project the visual
                                        appeal that matches the product’s amazing functionality and super features.  
                                    </Card.Text>
                                        <Card.Link href="/resume">Resume</Card.Link>
                                            <Card.Link href="/portfolio">Portfolio</Card.Link>
                                                <Card.Link href="/contact">Contact</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </main>
    
    );
  }












  
