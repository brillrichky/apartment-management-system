import { useState } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUnit, createUnit } from "../../reducer/apartment-slice";

export function ApartmentBookReduxForm (props) {
const {openPage, selectedUnit} = props;
const [formData, setFormData] = useState ({
    unitCode : selectedUnit?.unitCode ||'',
    floor: selectedUnit?.floor ||'',
    rooms: selectedUnit?.rooms ||'',
    direction: selectedUnit?.direction ||'',
    status: selectedUnit?.status ||'',
    balcony : selectedUnit?.balcony ||'',
    furnished: selectedUnit?.furnished ||'',
    rentPrice: selectedUnit?.rentPrice ||'',
    rentSchema: selectedUnit?.rentSchema ||'',
    sellPrice: selectedUnit?.sellPrice ||'',
    fullname: selectedUnit?.fullname ||'',
    email: selectedUnit?.email ||'',
    phone: selectedUnit?.phone ||'',
    martialStatus: selectedUnit?.martialStatus ||'',
    dependents: selectedUnit?.dependents ||'',
    birthDate: selectedUnit?.birthDate ||''
});

const dispatch = useDispatch();
const handleSubmit = (form) => {
form.preventDefault();
// dispatch(addGuest(formData));
// dispatch(createGuest(formData));
// openPage('list');

if (selectedUnit) {
    dispatch(updateUnit(formData));
} else {
    dispatch(createUnit(formData));
}
openPage('list');
}

const handleValueChange = (formField, e) => {
    const fields = Object.keys(formData);

    if (fields.includes(formField)) {
        setFormData({ ...formData, [formField]: e.target.value });
    }
}

    return (
        <Row as="section" className="d-flex justify-content-center mb-5">
          <Col sm="6">
            <Card className="mb-5 shadow">
              <Card.Header>
                <Card.Title>Form Update Apartment</Card.Title>
              </Card.Header>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                <Card.Body>
                  
                  
                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="unitCode">
                    Unit Code
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="unitCode"
                        placeholder="Unit Code"
                        value={formData.unitCode}
                        onChange={(e) => handleValueChange("unitCode", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  
                  
                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="floor">
                    Floor
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="floor"
                        placeholder="Floor"
                        value={formData.floor}
                        onChange={(e) => handleValueChange("Floor", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  
                  
                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="rooms" >
                    Rooms
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="rooms"
                        placeholder="Rooms"
                        value={formData.rooms}
                        onChange={(e) => handleValueChange("rooms", e)} //7.1
                      />
                    </Col>
                  </Form.Group>


                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="direction" >
                    Direction 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="direction"
                        placeholder="Direction"
                        value={formData.direction}
                        onChange={(e) => handleValueChange("direction", e)} //7.1
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="status" >
                    Status
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="status"
                        placeholder="Status"
                        value={formData.status}
                        onChange={(e) => handleValueChange("status", e)} //7.1
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor=" balcony" >
                    Balcony 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id=" balcony"
                        placeholder="Balcony"
                        value={formData.balcony}
                        onChange={(e) => handleValueChange("balcony", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  
        
                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="furnished" >
                    Furnished 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="furnished"
                        placeholder="Furnished"
                        value={formData.furnished}
                        onChange={(e) => handleValueChange("furnished", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="rentPrice" >
                    Rent Price 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="rentPrice"
                        placeholder="Rent Price"
                        value={formData.rentPrice}
                        onChange={(e) => handleValueChange("rentPrice", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="rentSchema" >
                    Rent Schema 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="rentSchema"
                        placeholder="Rent Schema"
                        value={formData.rentSchema}
                        onChange={(e) => handleValueChange("rentSchema", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="sellPrice" >
                    sellPrice 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="sellPrice"
                        placeholder="Sell Price"
                        value={formData.sellPrice}
                        onChange={(e) => handleValueChange("sellPrice", e)} //7.1
                      />
                    </Col>
                  </Form.Group>


                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor=" fullname" >
                    Full Name 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={(e) => handleValueChange("fullname", e)} //7.1
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="email" >
                    Email
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleValueChange("email", e)} //7.1
                      />
                    </Col>
                  </Form.Group>
                  
                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="phone" >
                    Phone 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="phone"
                        placeholder="phone"
                        value={formData.phone}
                        onChange={(e) => handleValueChange("phone", e)} //7.1
                      />
                    </Col>
                  </Form.Group>


                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="martialStatus" >
                    Martial Status 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="martialStatus"
                        placeholder="Martial Status"
                        value={formData.martialStatus}
                        onChange={(e) => handleValueChange("martialStatus", e)} //7.1
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="dependents" >
                    Dependents
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="dependents"
                        placeholder="Dependents"
                        value={formData.dependents}
                        onChange={(e) => handleValueChange("dependents", e)} //7.1
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as= {Row} className="mb-3">
                    <Form.Label column sm =" 3" htmlFor="birthDate" >
                    Birth Date 
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="birthDate"
                        placeholder="Birth Date"
                        value={formData.birthDate}
                        onChange={(e) => handleValueChange("birthDate", e)} //7.1
                      />
                    </Col>
                  </Form.Group>

                  

                  {/* <Form.Group as= {Row} className="mb-3">
                    <Button variant="success" type="submit" className="me-2">
                      Simpan 
                    </Button>
                    <Button //3.1
                      variant="danger" //3.1
                      type="reset" //3.1
                      onClick={() => openList()} //3.1
                    >
                      Reset 
                    </Button>
                  </Form.Group> */}
                
                
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button type="submit" variant ="dark" className= "me-2">Save</Button>
                    <Button type="reset" variant ="dark" onClick={() => openPage ('list')}>Back</Button>
                </Card.Footer>
              </Form>
            </Card>
          </Col>
        </Row>
      )
}