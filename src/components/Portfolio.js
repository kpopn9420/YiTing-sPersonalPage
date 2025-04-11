import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const projects = [
    {
        name: 'MEMER',
        description: 'A brief description of Project One.',
        technologies: ['Flask', 'MySQL','GPT-3','DALL·E'],
        links: [
            { label: 'IEEE Paper', url: 'https://ieeexplore.ieee.org/document/10469091' },
            { label: 'Website', url: 'https://flask-memer-richie-98a652b4a55b.herokuapp.com/' }
        ]
    },
    {
        name: 'Restaurant Managment System',
        description: 'A brief description of Project Two.',
        technologies: ['JavaFX','MySQL','Java'],
        links: [
            { label: 'Github', url: '' },
            { label: 'Demo', url: 'https://youtu.be/UREnQsBJj5M' }
        ]
    },
    {
        name: 'Ordering Website',
        description: 'A brief description of Project Three.',
        technologies: ['JSP','Servlet','MySQL'],
        links: [
            { label: 'Github', url: '' },
            { label: 'Demo', url: 'https://youtu.be/BcejJcJS1b8' }
        ]
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