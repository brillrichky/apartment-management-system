import { Col, Row } from "react-bootstrap";

export function Footer() {
    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <Row as="footer">
            <Col xs="12" className="text-center p-0 py-3 text-bg-dark">
                <span className="text-white">
                    &copy; 2022 <a href="" onClick={(e) => handleClick(e)}>Reducer</a>
                </span>
            </Col>
        </Row>
    );
}