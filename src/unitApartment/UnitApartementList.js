import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Table, Row, Col, Card, Button, Space } from "antd";
import {
  getListTransaction,
  getListResident,
  getListUnits,
  postTransactional,
  updateByIdTransactional,
  updatedUnits,
  setDetailData,
} from "../redux/apartSlice";
import { UnitApartementDetail } from "./UnitApartementDetail";

export const UnitApartementList = (props) => {
    console.log('PROPS',props)
    const {setPage,setDetail} = props
   const dispatch = useDispatch();
   const state = useSelector((storedState) => storedState);
   console.log(state);
   useEffect(() => {
     dispatch(getListTransaction());
     dispatch(getListResident());
     dispatch(getListUnits());
   }, []);


   const columns = [
     {
       title: "Floor",
       dataIndex: "floor",
       key: "floor",
     },
     {
       title: "Unit",
       dataIndex: "unitCode",
       key: "unitCode",
     },
     {
       title: "status",
       dataIndex: "status",
       key: "status",
     },
     {
       title: "price",
       dataIndex: "sellPrice",
       key: "sellPrice",
     },
     {
       title: "Rental price",
       dataIndex: "rentPrice",
       key: "rentPrice",
     },
     {
       title: "Rental schema",
       dataIndex: "rentSchema",
       key: "rentSchema",
     },
     {
       title: "Details",
       dataIndex: "rooms",
       key: "rooms",
       render: (_, record) => <p>{record?.rooms} rooms</p>,
     },
     {
       title: "Actions",
       key: "actions",
       render: (_, record) => (
         <Space size="middle">
           <Button onClick={()=> {
            //    dispatch(setDetailData(record))
                console.log(record)
                setDetail(record)
                setPage('detail')
           }} type="primary">Manage</Button>
         </Space>
       ),
     },
   ];

   return (
     <>
       <Row
         style={{minHeight: "100vh" }}
         type="flex"
         justify="center"
         align="middle"
       >
         <Card
         >
            <h4>List Apartement</h4>
           <Table dataSource={state?.store?.units} columns={columns} />
         </Card>
       </Row>
     </>
   );
};
