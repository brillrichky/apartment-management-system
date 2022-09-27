// import { Col, Row, Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchResidents,
  fetchTransactions,
  fetchUnits,
} from "../../reducer/transactionListSlice";
const data = {
  transactions: [
    {
      id: 1,
      unitId: 3,
      residentId: 1,
      transactionDate: new Date(),
      rentStartDate: "",
      rentEndDate: "",
      billingDate: "",
      period: null,
      price: 550000000,
      profit: 50000000,
    },
    {
      id: 2,
      unitId: 2,
      residentId: 3,
      transactionDate: new Date("2015-03-25"),
      rentStartDate: "",
      rentEndDate: "",
      billingDate: "",
      period: null,
      price: 650000000,
      profit: 103500000,
    },
    {
      id: 3,
      unitId: 1,
      residentId: 2,
      transactionDate: new Date("2016-03-25"),
      rentStartDate: "",
      rentEndDate: "",
      billingDate: "",
      period: null,
      price: 750000000,
      profit: 2150000,
    },
  ],
  residents: [
    {
      id: 1,
      fullname: "Agus",
      email: "agus@mail.com",
      phone: "123456",
      maritalStatus: "single",
      dependents: 0,
      birthDate: "2000-08-01",
    },
    {
      id: 2,
      fullname: "Septi",
      email: "septi@mail.com",
      phone: "234567",
      maritalStatus: "single",
      dependents: 0,
      birthDate: "2000-09-01",
    },
    {
      id: 3,
      fullname: "Okta",
      email: "okta@mail.com",
      phone: "345678",
      maritalStatus: "single",
      dependents: 0,
      birthDate: "2000-10-01",
    },
  ],
  units: [
    {
      id: 1,
      unitCode: "10AA",
      floor: 10,
      rooms: 2,
      direction: 0,
      status: "available",
      balcony: true,
      furnished: true,
      rentPrice: 4000000,
      rentSchema: "monthly",
      sellPrice: 500000000,
    },
    {
      id: 2,
      unitCode: "10AB",
      floor: 10,
      rooms: 2,
      direction: 2,
      status: "available",
      balcony: false,
      furnished: false,
      rentPrice: 3500000,
      rentSchema: "monthly",
      sellPrice: 400000000,
    },
    {
      id: 3,
      unitCode: "10BA",
      floor: 10,
      rooms: 2,
      direction: 4,
      status: "sold",
      balcony: true,
      furnished: true,
      rentPrice: 5000000,
      rentSchema: "monthly",
      sellPrice: 500000000,
    },
  ],
};

export function TransactionList() {
  const state = useSelector((e) => e.transactionlist);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResidents());
    dispatch(fetchUnits());
    dispatch(fetchTransactions());
  }, [dispatch, state.status.action]);

  const [isAscending, setAsc] = useState({});

  const sortByDate = () => {};

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
      <Row>
        <Col className="my-2 d-flex justify-content-center">
          <Button>Add Transaction</Button>
        </Col>
      </Row>
      <Row>
        <Col className="my-2 d-flex justify-content-start">
          <Button
          // variant={isAscending.profit ? "primary" : "outline-primary"}
          // onClick={() => sortByProfit(isAscending.profit)}
          >
            Filter by Profit
          </Button>
          <Button
            className="mx-2"
            // variant={isAscending.date ? "primary" : "outline-primary"}
            // onClick={() => sortByDate(isAscending.date)}
          >
            Filter by Transaction Date
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
                      <td>{resident.id}</td>
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
    </>
  );
}

// const [listState, setListState] = useState({
//   transactions: data.transactions,
//   units: data.units,
//   residents: data.residents,
// });

// const [isAscending, setIsAscending] = useState({
//   date: true,
//   profit: true,
// });

// const sortByDate = (value) => {
//   if (value) {
//     const newTransactions = data.transactions.sort(
//       (a, b) => a.transactionDate - b.transactionDate
//     );
//     setListState({
//       ...listState,
//       transactions: newTransactions,
//     });
//     console.log("IN ASCENDING", listState.transactions);
//   } else {
//     const newTransactions = data.transactions.sort(
//       (a, b) => b.transactionDate - a.transactionDate
//     );
//     setListState({
//       ...listState,
//       transactions: newTransactions,
//     });
//     console.log("IN DESCENDING", listState.transactions);
//   }
//   console.log("IN ASCENDING?", isAscending.date);
//   setIsAscending({ ...isAscending, date: !value });
//   console.log("IN ASCENDING??", isAscending.date);
// };

// const sortByProfit = (value) => {
//   if (value) {
//     const newTransactions = data.transactions.sort(
//       (a, b) => a.profit - b.profit
//     );
//     setListState({
//       ...listState,
//       transactions: newTransactions,
//     });
//     console.log("IN ASCENDING", listState.transactions);
//   } else {
//     const newTransactions = data.transactions.sort(
//       (a, b) => b.profit - a.profit
//     );
//     setListState({
//       ...listState,
//       transactions: newTransactions,
//     });
//     console.log("IN DESCENDING", listState.transactions);
//   }
//   console.log("IN ASCENDING?", isAscending.profit);
//   setIsAscending({ ...isAscending, profit: !value });
//   console.log("IN ASCENDING??", isAscending.profit);
// };
