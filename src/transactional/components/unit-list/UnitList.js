// import { Col, Row, Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchResidents,
  fetchTransactions,
  fetchUnits,
  filterByName,
  refreshList,
  sortByProfit,
  sortByDate,
} from "../../../redux/transactionSlice";

export function UnitList(props) {
  const state = useSelector((e) => e.transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResidents());
    dispatch(fetchUnits());
    dispatch(fetchTransactions());
  }, [dispatch, state.status.action]);

  const [isAscending, setAsc] = useState({});

  const[selected, setSelected] = useState("none");
  const handleSetPage = () => {
    const { setPage } = props;
    setPage("form");
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSelected(value);
  }

  const searchByName = (event) => {
    event.preventDefault();
    console.log("Selected",selected);
    const selectedNameId = state.residents.find((resident)=>resident.fullname.includes(selected));
    console.log("selectedNameId",selectedNameId);
    if(selectedNameId){
      const nameList = state.transactions.filter((transaction)=>transaction.residentId===selectedNameId.id);
      console.log("New Data",nameList);
      dispatch(filterByName(nameList));
    } else {
      console.log("Tidak ada data");
    }
  }

  if (state.status.isLoading) {
    return (
      <Row>
        <Col />
        <Col className="text-center">
          <Spinner
            animation="border"
            className="mx-5"
            style={{ width: "4rem", height: "4rem", margin: "20px" }}
          ></Spinner>
        </Col>
        <Col />
      </Row>
    );
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="my-2 d-flex justify-content-center">
            <Button onClick={() => handleSetPage()}>Add Transaction</Button>
          </Col>
        </Row>
        <Row>
          <Col className="my-2 d-flex justify-content-start">
            <Button
            variant={state.status.asc ? "primary" : "outline-primary"}
            onClick={() => dispatch(sortByProfit())}
            >
              Filter by Profit
            </Button>
            <Button
              className="mx-2"
              variant={state.status.asc ? "primary" : "outline-primary"}
              onClick={() => dispatch(sortByDate())}
            >
              Filter by Transaction Date
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="my-2 d-flex justify-content-start">
            <Form onSubmit={(e) => searchByName(e)}>
              <InputGroup className="">
                <Form.Control
                  placeholder="Search by Name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  onChange={(e)=>handleOnChange(e)}
                />
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
              </InputGroup>
            </Form>
            <Button
              className="mx-2"
              onClick={() => dispatch(refreshList())}
            >
              Refresh
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <thead className="text-center">
                <tr className="text-bg-dark">
                  <th>#</th>
                  <th>Floor</th>
                  <th>Unit</th>
                  <th>Resident</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Profit</th>
                  <th>Transaction Date</th>
                  <th>Rental Schema</th>
                  <th>Start/End Date</th>
                  <th>Period</th>
                  <th>Billing Date</th>
                </tr>
              </thead>
              <tbody>
                {state.transactions.map((transaction, index) => {
                  const unit = state.units.find(
                    (unit) => unit.id === transaction.unitId
                  );
                  const resident = state.residents.find(
                    (resident) => resident.id === transaction.residentId
                  );
                  return (
                    <>
                      <tr className="text-center" key={transaction.id}>
                        <td>{index + 1}</td>
                        <td>{unit.floor}</td>
                        <td>{unit.unitCode}</td>
                        <td>{resident.fullname}</td>
                        <td>{unit.status}</td>
                        <td>{transaction.price}</td>
                        <td>{transaction.profit}</td>
                        <td>{transaction.transactionDate || "-"}</td>
                        <td>{unit.rentSchema || "-"}</td>
                        <td>
                          {transaction.rentStartDate || "-"}/
                          {transaction.rentEndDate || "-"}
                        </td>
                        <td>{transaction.period || "-"}</td>
                        <td>{transaction.billingDate || "-"}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}