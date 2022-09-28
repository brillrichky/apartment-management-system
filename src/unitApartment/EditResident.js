import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Card,
  Select,
  DatePicker,
  Space,
  InputNumber,
} from "antd";
import React from "react";
import uniqid from "uniqid";
import moment from "moment";

import { updatedUnits } from "../redux/apartSlice";

function EditResident(props) {
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { setPage, detail,detailResident } = props;

  console.log(props);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLogout(true);
  };

  const onFinish = (e) => {
    let payloads = form.getFieldsValue();
    payloads.birthDate = moment(form.getFieldValue('birthDate')).format('YYYY-MM-DD')
    payloads.id = detailResident?.id;
    console.log(payloads);
    dispatch(updatedUnits(payloads))
  };

  let temp = {...detailResident}
  temp.birthDate = moment(detailResident.birthDate, "YYYY-MM-DD"); 
  console.log(temp);

  return (
    <>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: "50%" }}>
          <h4>Edit Resident</h4>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={temp}
            autoComplete="off"
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input fullname !",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input email!",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Marital Status"
              name="maritalStatus"
              rules={[
                {
                  required: true,
                  message: "Please input Marital Status !",
                },
              ]}
            >
              <Select></Select>
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input phone !",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Birthdate"
              name="birthDate"
              rules={[
                {
                  required: true,
                  message: "Please input Birthdate !",
                },
              ]}
            >
              <DatePicker
                defaultValue={moment(detailResident.birthDate, "YYYY-MM-DD")}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item
              label="Dependent"
              name="dependents"
              rules={[
                {
                  required: true,
                  message: "Please input dependent",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    setPage("detail");
                  }}
                >
                  Back
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
}

export default EditResident;
