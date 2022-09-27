import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { deleteUnit, fetchUnits } from "../../reducer/apartment-slice";
import { ApartmentBookReduxForm } from "./ApartmentBookReduxForm";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";

export function ApartmentBookRedux(props) {
    // useEffect : menambahkan fungsi tambahan (side effect) setelah komponen ini dirender/ diload.
    // useSelector : menentukan state yang akan digunakan di component ini.
    // useDispatch : fungsi mengeksekusi actions.
    const [page, setPage] = useState("list");
    const [selectedUnit, selectUnit] = useState();
    const state = useSelector((storedState) => storedState.unit);
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch, state.action]);

  const handleUpdateUnit = (unit) => {
    selectUnit(unit);
    setPage("form");
  };

  const handleAddUnit = () => {
    selectUnit({});
    setPage("form");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (unit) => {
    selectUnit(unit);
    setShow(true);
  };

  const handleDelete = () => {
    dispatch(deleteUnit(selectedUnit));
    setShow(false);
  };
  if (page === "form") {
    return (
      <ApartmentBookReduxForm openPage={setPage} selectedUnit={selectedUnit} />
    );
  }

  if (state.isLoading) {
    return <p>loading guests...</p>; //reject, bukan berarti server mati tapi bisa juga dari jaringan dll.
  } else if (!state.isLoading && !Array.isArray(state.units)) {
    return <p>guests not found.</p>;
  } else {
    return (
      <Fragment>
        <Row as="section" className="mx-5 my-3">
          <Col
            xs="12"
            className="mb-3 d-flex justify-content-end align-items-start"
          >
            <Button onClick={() => handleAddUnit("form")} variant="dark">
              + Tambah Data
            </Button>
          </Col>

          <Table striped bordered hover responsive>
            <thead className="bg-dark">
              <tr className="text-danger">
                <th>unitCode</th>
                <th>floor</th>
                <th>rooms</th>
                <th>direction</th>
                <th>status</th>
                <th>balcony</th>
                <th>furnished</th>
                <th>rentPrice</th>
                <th>rentSchema</th>
                <th>sellPrice</th>
                <th>fullname</th>
                <th>email</th>
                <th>phone</th>
                <th>martialStatus</th>
                <th>dependents</th>
                <th>birthDate</th>
              </tr>
            </thead>
            <tbody>
              {state.guests.map((unit, index) => (
                <tr key={unit.id}>
                  <td>{index + 1}</td>
                  <td>{unit.unitCode}</td>
                  <td>{unit.floor}</td>
                  <td>{unit.rooms}</td>
                  <td>{unit.direction}</td>
                  <td>{unit.status}</td>
                  <td>{unit.balcony}</td>
                  <td>{unit.furnished}</td>
                  <td>{unit.rentPrice}</td>
                  <td>{unit.rentSchema}</td>
                  <td>{unit.sellPrice}</td>
                  <td>{unit.fullname}</td>
                  <td>{unit.email}</td>
                  <td>{unit.phone}</td>
                  <td>{unit.martialStatus}</td>
                  <td>{unit.dependents}</td>
                  <td>{unit.birthDate}</td>
                  <td>
                    <Button
                      className="me-2"
                      size="sm"
                      onClick={() => handleUpdateUnit(unit)}
                      variant="dark"
                    >
                      Edit
                    </Button>
                    <Button
                      className="me-2"
                      size="sm"
                      onClick={() => handleShow(unit)}
                      // onClick={() => dispatch(deleteGuest(guest))}
                      variant="danger"
                    >
                      Delete
                    </Button>
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
            Are you sure you want to delete {selectUnit?.name} ?
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