import { Fragment, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ApartmentBookForm } from "./ApartmentBookForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteUnit, fetchUnits } from "../../reducer/unit-slice";

// const transactions = [
//     {
//         "id": 1,
//         "unitId": 3,
//         "residentId": 1,
//         "transactionDate": "",
//         "rentStartDate": "",
//         "rentEndDate": "",
//         "billingDate": "",
//         "period": null,
//         "price": 550000000,
//         "profit": 50000000
//       }
// ];

// const residents = [
//     {
//         "id": 1,
//         "fullname": "Agus",
//         "email": "agus@mail.com",
//         "phone": "123456",
//         "maritalStatus": "single",
//         "dependents": 0,
//         "birthDate": "2000-08-01"
//       },
//       {
//         "id": 2,
//         "fullname": "Septi",
//         "email": "septi@mail.com",
//         "phone": "234567",
//         "maritalStatus": "single",
//         "dependents": 0,
//         "birthDate": "2000-09-01"
//       },
//       {
//         "id": 3,
//         "fullname": "Okta",
//         "email": "okta@mail.com",
//         "phone": "345678",
//         "maritalStatus": "single",
//         "dependents": 0,
//         "birthDate": "2000-10-01"
//       }
// ];

// const units = [
//     {
//         "id": 1,
//         "unitCode": "10AA",
//         "floor": 10,
//         "rooms": 2,
//         "direction": 0,
//         "status": "available",
//         "balcony": true,
//         "furnished": true,
//         "rentPrice": 4000000,
//         "rentSchema": "monthly",
//         "sellPrice": 500000000
//       },
//       {
//         "id": 2,
//         "unitCode": "10AB",
//         "floor": 10,
//         "rooms": 2,
//         "direction": 2,
//         "status": "available",
//         "balcony": false,
//         "furnished": false,
//         "rentPrice": 3500000,
//         "rentSchema": "monthly",
//         "sellPrice": 400000000
//       },
//       {
//         "id": 3,
//         "unitCode": "10BA",
//         "floor": 10,
//         "rooms": 2,
//         "direction": 4,
//         "status": "sold",
//         "balcony": true,
//         "furnished": true,
//         "rentPrice": 5000000,
//         "rentSchema": "monthly",
//         "sellPrice": 500000000
//       }
// ]

export function ApartmentBook(props) {
    const [ page, setPage ] = useState('list');
    const [ selectedUnit, setSelectUnit ] = useState();
    const state = useSelector((storedUnit) => storedState.unit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatchEvent(fetchUnit());
    }, [dispatch, state.action]);

    const handleUpdateUnit = (unit) => {
        setSelectUnit(unit);
        setPage('form');
    };

    const handleAddUnit = () => {
        setSelectUnit({});
        setPage('form');
    };

    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (unit) => {
        setSelectUnit(unit);
        setShow(true);
    };

    const handleDelete = () => {
        dispatch(deleteUnit(selectedUnit));
        setShow(false);
    };

    if (page === 'form') {
        return <ApartmentBookForm openPage={setPage} selectedUnit={selectedUnit} />
    }

    if (state.isLoading) {
        return <p>loading units...</p>
    } else if ((!state.isLoading && !Array.isArray(state.units))) {
        return <p>units not found</p>
    } else {
        return (
            <Fragment>
                <Row as="section" className="mx-5 my-3">
                    <Col xs="12" className="mb-3 d-flex justify-content-end align-items-start">
                        <Button onClick={() => handleAddUnit("form")} variant="dark">Tambah Data</Button>
                    </Col>
                    <Table striped bordered hover responsive>
                        <thead className="bg-dark">
                            <tr className="text-danger">
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
                        <tbody>
                            {state.units.map((unit, index) => (
                                <tr key={unit.id}>
                                    <td>{index + 1}</td>
                                    <td>{unit.floor}</td>
                                    <td>{unit.unit}</td>
                                    <td>{unit.status}</td>
                                    <td>{unit.price}</td>
                                    <td>{unit.rentalPrice}</td>
                                    <td>{unit.rentalSchema}</td>
                                    <td>{unit.details}</td>
                                    <td>{unit.actions}</td>
                                    <td>
                                        <Button className="me-2" size="sm" onClick={() => handleUpdateUnit(unit)} variant="dark">Edit</Button>
                                        <Button className="me-2" size="sm" onClick={() => handleShow(unit)} variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete {setSelectUnit?.name} ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => handleDelete()}>
                        Delete
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                        Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}