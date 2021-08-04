import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import Projectdata from "./Projectdata";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    {Projectdata.map((val) => {

                        return (
                            <Col key={val.key} md={4} className="project-card" >
                                <ProjectCard imgpath={val.imgpath} title={val.title} desc={val.desc} link={val.link} />
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;


