import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { ApartmentRow } from "./ApartmentRow";


export function ApartmentBookList(props) {
    const { unit, openForm } = props;

    const sayHello = (unit, e) => {
        alert(`Hello ${unit.unitCode}`);
      };
      console.log(unit);
      return (
        <>
          <Row as="section" className="mx-5 my-3">
            <Col
              xs="12"
              className="mb-3 d-flex justify-content-end align-items-start"
            >
              <Button //2.1
                onClick={() => openForm()} //2.1
                variant="success" //2.1
                className="mx-5 my-3" //2.1
              >
                Add Unit
              </Button>
            </Col>
            <Col xs="12">
              <Table striped bordered hover responsive>
                <thead className="bg-secondary">
                  <tr className="text-white">
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
                </thead>
                <ApartmentRow units={unit} sayHello={sayHello} /> 
              </Table>
            </Col>
          </Row>
        </>
      );
    }
    



