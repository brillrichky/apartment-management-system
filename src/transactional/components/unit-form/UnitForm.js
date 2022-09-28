import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react';
import { Navigate } from "react-router-dom";
import {
  getListTransaction,
  getListResident,
  getListUnits,
  postTransactional,
} from "../../../redux/apartSlice";
import { Button, Checkbox, Form, Input, Row,Col,Card,Select,DatePicker } from 'antd';
import React from 'react';
import { getUnits, updateUnits } from "../../../api/listApi";
import uniqid from 'uniqid';
import moment from 'moment';




function UnitForm(props) {
    const [logout, setLogout] = useState(false);

    const dispatch = useDispatch();
    const {openPage, setPage} = props;
    const state = useSelector((storedState) => storedState);
    console.log(state)
    const [form] = Form.useForm()
    useEffect(()=> {
        dispatch(getListTransaction());
        dispatch(getListResident());
        dispatch(getListUnits())
    },[])

/////////////////////////////////////////

// const handleSubmit = (form) => {
// form.preventDefault();
//     if (getFieldValue) {
//       dispatch(updateUnits(form));
//   } else {
//       dispatch(createUnits(form));
//   }
//   openPage('list');
//   }



      const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
       
        setLogout(true);
        
      };

      

    const [hide,setHide] = useState(true)


    const onFinish = () =>{
        console.log(state.store.units.find((item) => item.id === form.getFieldValue('units')))
        const body = {
          id: uniqid(),
          unitCode: form.getFieldValue("units"),
          floor: form.getFieldValue("floor"),
          rooms: form.getFieldValue("rooms"),
          direction: form.getFieldValue("direction"),
          status: form.getFieldValue("status"),
          balcony: form.getFieldValue("status"),
          furnished: form.getFieldValue("status"),
          rentPrice: form.getFieldValue("rentPrice"),
          rentSchema: form.getFieldValue("rentSchema"),
          sellPrice: form.getFieldValue("sellPrice"),
          price: form.getFieldValue("price"),
          fullname: form.getFieldValue("fullname"),
          email: form.getFieldValue("email"),
          phone: form.getFieldValue("phone"),
          martialStatus: form.getFieldValue("martialStatus"),
          dependents: form.getFieldValue("dependents"),
          birthDate: form.getFieldValue("birthDate"),
          
        }; 
        console.log(form.getFieldsValue())
        console.log(body)
        dispatch(postTransactional(body));
        setPage('list')
    }

    const onChangeType = (e) => {
        console.log(e,form.getFieldsValue('price'))
        

        const unitsSelected = state?.store?.units.filter(
          (item) => item.id === form.getFieldValue("units")
        );


        if(e === 'sewa'){
            form.setFieldValue('price',unitsSelected[0].rentPrice)
            setHide(false);
        }
        else if(e === 'jual'){
            form.setFieldValue("price", unitsSelected[0].sellPrice);
            setHide(true);
        }
    }

    const calculatePeriod = (e) => {
       const temp =  state.store.units.find(
          (item) => item.id === form.getFieldValue("units")
        );
       const diff = e !== NaN || e!== null ? form.getFieldValue("startDate").diff(e, "days") : 0;
    

       switch(temp.rentSchema){
        case 'monthly':
            const a = Math.abs(diff) / 30 < 1
            if(a){
                form.setFieldValue('periode','1 month')
            }
            else{
                form.setFieldValue(
                  "periode",
                  `${Math.ceil(Math.abs(diff) / 30)} month`
                );
                console.log(Math.ceil(a),a)
            }
            break;
        case 'weekly':
            const b = Math.abs(diff) / 7 < 1;
            if(a){
                form.setFieldValue('periode','1 week')
            }
            else{
                form.setFieldValue(
                  "periode",
                  `${Math.ceil(Math.abs(diff) / 7)} week`
                );
            }
            break;
        default:
           form.setFieldValue("periode", `${Math.abs(diff)} day`); 
       }
    }

    const unitIsAvailable = state?.store?.units.filter((item) => item.status === 'available')
    if (logout) {
      return <Navigate to="/login" />;
    }

        return (
          <>
            <Row>
              <Button onClick={handleLogout}>Logout</Button>
            </Row>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ minHeight: "100vh" }}
            >
              <Card style={{ width: "50%" }}>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                  onFinish={onFinish}
                >


                  <Form.Item
                    label="Unit Apartement"
                    name="units"
                    rules={[
                      {
                        required: true,
                        message: "Please input unit apartment !",
                      },
                    ]}
                  >
                    <Select onChange={(e) => form.setFieldValue("units", e)}>
                      {unitIsAvailable.map((e) => {
                        return (
                          <Select.Option value={e.id}>
                            {e.unitCode}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>



                  <Form.Item
                    label="Floor"
                    name="floor"
                    rules={[
                      {
                        required: true,
                        message: "Please input Floor !",
                      },
                    ]}
                  >
                    <Input type="number" />
                  </Form.Item>



                  <Form.Item
                    label="Rooms"
                    name="rooms"
                    rules={[
                      {
                        required: true,
                        message: "Please input Rooms !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("rooms")} />
                  </Form.Item>


                  <Form.Item
                    label="Direction"
                    name="direction"
                    rules={[
                      {
                        required: true,
                        message: "Please input Direction !",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        onChangeType(e);
                      }}
                    >
                      <Select.Option value="NORTH">NORTH</Select.Option>
                      <Select.Option value="NORTHEAST">NORTHEAST</Select.Option>
                      <Select.Option value="EAST">EAST</Select.Option>
                      <Select.Option value="SOUTHEAST">SOUTHEAST</Select.Option>
                      <Select.Option value="SOUTH">SOUTH</Select.Option>
                      <Select.Option value="SOUTHWEST">SOUTHWEST</Select.Option>
                      <Select.Option value="WEST">WEST</Select.Option>
                      <Select.Option value="NORTHWEST">NORTHWEST</Select.Option>
                    </Select>
                  </Form.Item>


                  <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                      {
                        required: true,
                        message: "Please input Status !",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        onChangeType(e);
                      }}
                    >
                      <Select.Option value="AVAILABLE">AVAILABLE</Select.Option>
                      <Select.Option value="RENTED">RENTED</Select.Option>
                      <Select.Option value="SOLD">SOLD</Select.Option>
                      <Select.Option value="UNAVAILABLE">UNAVAILABLE</Select.Option>
                    </Select>
                  </Form.Item>


                  <Form.Item
                    label="Balcony"
                    name="balcony"
                    rules={[
                      {
                        required: true,
                        message: "Please input Balcony !",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        onChangeType(e);
                      }}
                    >
                      <Select.Option value="true">YES</Select.Option>
                      <Select.Option value="false">NO</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Furnished"
                    name="furnished"
                    rules={[
                      {
                        required: true,
                        message: "Please input Furnished !",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        onChangeType(e);
                      }}
                    >
                      <Select.Option value="true">YES</Select.Option>
                      <Select.Option value="false">NO</Select.Option>
                    </Select>
                  </Form.Item>


                  <Form.Item
                    label="Rent Price"
                    name="rentprice"
                    rules={[
                      {
                        required: true,
                        message: "Please input Rent Price !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("rentPrice")} />
                  </Form.Item>


                  <Form.Item
                    label="Rent Schema"
                    name="rentSchema"
                    rules={[
                      {
                        required: true,
                        message: "Please input Rent Schema !",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        onChangeType(e);
                      }}
                    >
                      <Select.Option value="daily">DAILY</Select.Option>
                      <Select.Option value="weekly">WEEKLY</Select.Option>
                      <Select.Option value="mounthly">MONTHLY</Select.Option>
                    </Select>
                  </Form.Item>


                  <Form.Item
                    label="Sell Price"
                    name="sellPrice"
                    rules={[
                      {
                        required: true,
                        message: "Please input Transaction Sell Price !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("sellPrice")} />
                  </Form.Item>

                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Please input Price !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("price")} />
                  </Form.Item>


                  <center><strong>Data Pelanggan</strong></center>

                  <Form.Item
                    label="Fullname"
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "Please input Fullname !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("fullname")} />
                  </Form.Item>



                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input Email !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("email")} />
                  </Form.Item>


                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input Phone !",
                      },
                    ]}
                  >
                    <Input value={form.getFieldValue("phone")} />
                  </Form.Item>





                  <Form.Item
                    label="Martial Status"
                    name="martialStatus"
                    rules={[
                      {
                        required: true,
                        message: "Please input Rent Martial Status !",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        onChangeType(e);
                      }}
                    >
                      <Select.Option value="single">SINGLE</Select.Option>
                      <Select.Option value="taken">TAKEN</Select.Option>
                      <Select.Option value="married">MARRIED</Select.Option>
                      <Select.Option value="divorced">DIVORCED</Select.Option>
                      <Select.Option value="jones">JONES</Select.Option>
                    </Select>
                  </Form.Item>



                  <Form.Item
                    label="Dependents"
                    name="dependents"
                    rules={[
                      {
                        required: true,
                        message: "Please input Dependents !",
                      },
                    ]}
                  >
                    <Input type="number" />
                  </Form.Item>


                  <Form.Item
                    label="Birth Date"
                    name="birthDate"
                    rules={[
                      {
                        required: true,
                        message: "Please input Transction Birth Date!",
                      },
                    ]}
                  >
                    <DatePicker
                      disabledDate={(current) =>
                        current.isBefore(moment().subtract(1, "day"))
                      }
                    />
                  </Form.Item>
                  {hide === false ? (
                    <>


                      <Form.Item
                        hidden={false}
                        label="Start Date"
                        name="startDate"
                        rules={[
                          {
                            required: true,
                            message: "Please input your start date !",
                          },
                        ]}
                      >
                        <DatePicker
                          disabledDate={(current) =>
                            current.isBefore(moment().subtract(1, "day"))
                          }
                        />
                      </Form.Item>



                      <Form.Item
                        label="End Date"
                        name="endDate"
                        rules={[
                          {
                            required: true,
                            message: "Please input your End date!",
                          },
                        ]}
                      >
                        <DatePicker
                          disabledDate={(current) =>
                            current.isBefore(moment().subtract(1, "day"))
                          }
                          onChange={(e) => calculatePeriod(e)}
                        />
                      </Form.Item>



                    </>
                  ) : null}
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">Save</Button>
                    <Button type="reset" variant ="dark" onClick={() => openPage ('list')}>Back</Button>
                  </Form.Item>
                </Form>
              </Card>
            </Row>
          </>
        );
}

export default UnitForm;