import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./Resumecontent";
import pdf from "../../Assets/kgaurav123.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {



    return (
        <Container className="resume-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <Resumecontent
                            title="Python Developer Intern"
                            date="February 2020 - April 2021"
                            content={[
                                "Developed Django rest API for user registration and login",
                                "Made a script for directly uploading to aws s3 using boto, and importing data to csv file from dictionary with multiple keys",
                            ]}
                        />
                        <h3 className="resume-title">Extracurricular Activities</h3>
                        <Resumecontent
                            title="WebD Head[SAENITD student's chapter of NIT Durgapur]"
                            content={[
                                "",
                            ]}
                        />
                        <Resumecontent
                            title=""
                            content={[
                                "",
                            ]}
                        />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                            title="Electrical Engineering [NIT Durgapur] "
                            date="2018 - 2022"
                            content={[`CGPA:  8.31/10(Till 6th Sem)`]}
                        />
                        <Resumecontent
                            title="12TH BOARD (Gyan Jyoti Residential Public,Patna)"
                            date=""
                            content={["Precentage: 90.8%"]}
                        />
                        <Resumecontent
                            title="10TH BOARD (Gyanasthali High School) "
                            date=""
                            content={["CGPA: 10/10"]}
                        />
                        <h3 className="resume-title">Ranks and Achivements</h3>
                        <Resumecontent
                            title=""
                            content={[
                                ` `,
                                ` `,
                                "",
                                "",
                            ]}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload />&nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;