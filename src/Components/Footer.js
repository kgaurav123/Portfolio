import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Handels from "./Handles";
function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Kumar Gourav</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} KG</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        {Handels.map((val, i) => {

                            return (
                                <li className="social-icons" key={val.key}>
                                    <a

                                        href={val.href}
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {val.icon}
                                    </a>
                                </li>
                            )
                        })}


                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;