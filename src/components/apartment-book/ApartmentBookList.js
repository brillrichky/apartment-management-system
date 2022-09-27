import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { ApartmentRow } from "./ApartmentRow";

export function ApartmentBookList(props) {
    const { units, openForm } = props;

    const sayHello = (unit, e) => {
        alert(`Hello ${units.unitCode}`);
      }

    return (
        <>
            <Col xs="12" className="mb-3 d-flex justify-content-end align-items-start">
                <Button onClick={() => openForm()} variant="dark">Add Unit</Button>
            </Col>
            <Container>
                <Row>
                    <h2 className="text-center">Apartment List</h2>
                    <h3 style= {{color: "white", textDecoration: "overline", textDecorationColor: "red"}} className="text-center">Apartment List</h3>
                </Row>
            </Container>
        <Table striped bordered hover responsive>
            <thread className="">
                <tr>
                    <th>#</th>
                    <th>Floor</th>
                    <th>Unit</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Rental Price</th>
                    <th>Rental Schema</th>
                    <th>Details</th>
                    <th>Actions</th>
                </tr>
            </thread>
            <tbody>
                <ApartmentRow units={units} sayHello={sayHello} />
            </tbody>
        </Table>
        </>
    );
}