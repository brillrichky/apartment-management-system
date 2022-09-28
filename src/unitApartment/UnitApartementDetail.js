import { Card,Row,Button,Col,Form,Input,InputNumber,Layout, Divider } from "antd"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getListResident,getListUnits } from "../redux/apartSlice";

export const UnitApartementDetail = (props) => {
const style = {
  padding: "8px 0",
};
const dispatch = useDispatch()
   useEffect(() => {
     dispatch(getListResident());
     dispatch(getListUnits());
   }, []);

   const state = useSelector((storedState) => storedState);

console.log(state.store)
const { setPage, detail, setDetailResident } = props;
const findUnitId = state.store.units.find((item) => item.unitCode === detail?.unitCode)
const findTransactionId = state.store.transactional.find((item) => item.unitId === detail?.id )
const findResidentId = state.store.residents.find(
  (item) => item.id === findTransactionId?.residentId
);


    return (
      <>
        {console.log(detail)}
        <Row style={{ marginTop: "30px" }} justify="center">
          <Card style={{ width: "50%" }}>
            <h4>Detail apartment</h4>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Floor</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={detail?.floor} />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Unit</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={detail?.unitCode} />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Status</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findUnitId?.status} />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Price</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findUnitId?.sellPrice} />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Rental Price</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findUnitId?.rentPrice} />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Rental Schema</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findUnitId?.rentSchema} />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Furnished</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input
                    readOnly
                    value={findUnitId?.furnished ? "Yes" : "No"}
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Balcony</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findUnitId?.balcony ? "Yes" : "No"} />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Direction</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findUnitId?.direction} />
                </div>
              </Col>
            </Row>
            <Row>
              <Button
                type="primary"
                onClick={() => {
                  setPage("update-apart");
                }}
              >
                Edit Apartement
              </Button>
            </Row>
            <Divider />
            <Row>
              <p>Resident</p>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Fullname</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findResidentId?.fullname} />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Email</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findResidentId?.email} />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Marital status</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findResidentId?.maritalStatus} />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Phone</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findResidentId?.phone} />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>Birth date</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findResidentId?.birthDate} />
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <p style={{ fontWeight: "bold" }}>dependent</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Input readOnly value={findResidentId?.dependents} />
                </div>
              </Col>
            </Row>
            <Row>
              <Button
                disabled={detail?.status === "available" ? true : false}
                type="primary"
                onClick={() => {
                  setDetailResident(findResidentId);
                  setPage("update-resident");

                }}
              >
                Edit Resident
              </Button>
            </Row>
            {/* <Table dataSource={state?.store?.units} columns={columns} /> */}
          </Card>
        </Row>
        <Row justify="center" style={{ marginTop: "10px" }}>
          <Button type="primary" onClick={() => setPage("list")}>
            Back
          </Button>
        </Row>
      </>
    );
}