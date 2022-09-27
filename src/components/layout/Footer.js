
import { Col, Row } from "react-bootstrap";

export function Footer(){
    const handleClick = (e) => {
        e.preventDefault();
        console.log('batal klik');
    }
    return(
        <Row as  ="footer" className="text-center p-0 py-3 text-bg-dark">
            <Col xs="12">
                <span className="text-danger"> &copy; 2022 <a className="text-danger text-decoration-none" onClick={(e) => handleClick(e)}>Enigma Camp</a>
                </span>
            </Col>
        </Row>
        
    );
}