import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const projects = [
    {
        name: 'Project One',
        description: 'A brief description of Project One.',
        technologies: ['Flask', 'MySQL'],
        githubLink: 'https://github.com/yourusername/project-one',
        demoLink: 'https://yourusername.github.io/project-one'
    },
    {
        name: 'Project Two',
        description: 'A brief description of Project Two.',
        technologies: ['JavaFX', 'DALL·E'],
        githubLink: 'https://github.com/yourusername/project-two',
        demoLink: 'https://yourusername.github.io/project-two'
    },
    {
        name: 'Project Three',
        description: 'A brief description of Project Three.',
        technologies: ['GPT-3', 'React'],
        githubLink: 'https://github.com/yourusername/project-three',
        demoLink: 'https://yourusername.github.io/project-three'
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <div>
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="badge bg-secondary me-1">{tech}</span>
                                    ))}
                                </div>
                                <Button variant="primary" href={project.githubLink} target="_blank">GitHub</Button>
                                <Button variant="secondary" href={project.demoLink} target="_blank" className="ms-2">Demo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Portfolio;