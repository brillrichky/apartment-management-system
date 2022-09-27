// import { Col, Row, Table } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
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
      price: 550000000,
      profit: 50000000,
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
      price: 550000000,
      profit: 50000000,
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
  const [listState, setListState] = useState({
    transactions: data.transactions,
    units: data.units,
    residents: data.residents,
  });

  const [oldListState, setOldListState] = useState({
    transaction: listState.transactions,
  });

  const [isAscending, setIsAscending] = useState(true);

  const sortByDate = (isAscending) => {
    if (isAscending) {
      const newTransactions = data.transactions.sort(
        (a, b) => a.transactionDate - b.transactionDate
      );
      setListState({
        ...listState,
        transactions: newTransactions,
      });
      console.log("IN ASCENDING", listState.transactions);
    } else {
      const newTransactions = data.transactions.sort(
        (a, b) => b.transactionDate - a.transactionDate
      );
      setListState({
        ...listState,
        transactions: newTransactions,
      });
      console.log("IN DESCENDING", listState.transactions);
    }
    console.log("IN ASCENDING?", isAscending);
    setIsAscending(!isAscending);
    console.log("IN ASCENDING??", isAscending);
  };

  return (
    <>
      <Row>
        <Button>Add Transaction</Button>
        <Button>Filter by Profit</Button>
        <Button onClick={() => sortByDate(isAscending)}>
          Filter by Transaction Date
        </Button>
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
              {listState.transactions.map((transaction, index) => {
                const unit = listState.units.find(
                  (unit) => unit.id === transaction.unitId
                );
                const resident = listState.residents.find(
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
                      <td>{transaction.transactionDate.getTime() || "-"}</td>
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
