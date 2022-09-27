
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react';
import {
  getListTransaction,
  getListResident,
  getListUnits,
  postTransactional,
} from "../../../redux/apartSlice";
import { Button, Checkbox, Form, Input, Row,Col,Card,Select,DatePicker } from 'antd';
import React from 'react';
import { getUnits } from "../../../api/listApi";
import uniqid from 'uniqid'
import moment from 'moment'

function TransactionForm(props) {
    const dispatch = useDispatch();
    const {setPage} = props
    const state = useSelector((storedState) => storedState);
    console.log(state)
    const [form] = Form.useForm()
    useEffect(()=> {
        dispatch(getListTransaction());
        dispatch(getListResident());
        dispatch(getListUnits())
    },[])

    const [hide,setHide] = useState(true)

    const disabledDate = (current) => {
      // Can not select days before today and today
      return ;
    };

    const onFinish = () =>{
        console.log(state.store.units.find((item) => item.id === form.getFieldValue('units')))
        const body = {
          id: uniqid(),
          unitId: form.getFieldValue("units"),
          residentId: form.getFieldValue("resident"),
          transactionDate: moment(form.getFieldValue("trxDate")).format(
            "DD-MMM-YYYY"
          ),
          rentStartDate: form.getFieldsValue().hasOwnProperty("startDate")
            ? moment(form.getFieldValue("startDate")).format("DD-MMM-YYYY")
            : null,
          rentEndDate: form.getFieldsValue().hasOwnProperty("endDate")
            ? moment(form.getFieldValue("endDate")).format("DD-MMM-YYYY")
            : null,
          billingDate: form.getFieldsValue().hasOwnProperty("billingDate")
            ? moment(form.getFieldValue("billingDate")).format("DD-MMM-YYYY")
            : null,
          period: form.getFieldValue('periode'),
          price: form.getFieldValue("price"),
          profit: parseInt(form.getFieldValue('trxPrice')) - form.getFieldValue('price'),
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
        return (
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
                        <Select.Option value={e.id}>{e.unitCode}</Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Nama penyewa"
                  name="resident"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Select>
                    {state?.store?.residents?.map((e) => {
                      return (
                        <Select.Option value={e.id}>{e.fullname}</Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="type"
                  name="type"
                  rules={[
                    {
                      required: true,
                      message: "Please input type !",
                    },
                  ]}
                >
                  <Select
                    onChange={(e) => {
                      onChangeType(e);
                    }}
                  >
                    <Select.Option value="sewa">Sewa</Select.Option>
                    <Select.Option value="jual">Jual</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Price"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input price !",
                    },
                  ]}
                >
                  <Input readOnly value={form.getFieldValue("price")} />
                </Form.Item>
                <Form.Item
                  label="Transaction Price"
                  name="trxPrice"
                  rules={[
                    {
                      required: true,
                      message: "Please input Transaction Price !",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  label="Transaction Date"
                  name="trxDate"
                  rules={[
                    {
                      required: true,
                      message: "Please input Transction Date!",
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
                    <Form.Item
                      label="Periode"
                      name="periode"
                      rules={[
                        {
                          required: true,
                          message: "Please input periode!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Billing Date"
                      name="billingDate"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Billing Date!",
                        },
                      ]}
                    >
                      <DatePicker
                        disabledDate={(current) =>
                          current.isBefore(moment().subtract(1, "day"))
                        }
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
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Row>
        );
}

export default TransactionForm;
