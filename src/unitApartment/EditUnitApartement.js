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
  InputNumber
} from "antd";
import React from "react";
import uniqid from "uniqid";
import moment from "moment";

import { updatedUnits } from "../redux/apartSlice";

function EditUnitApartement(props) {
  const [logout, setLogout] = useState(false);
  
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { setPage,detail } = props;
  console.log(props.detail)
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLogout(true);
  };

  const onFinish = (e) => {
    let payloads = form.getFieldsValue()
    payloads.id = detail?.id
    dispatch(updatedUnits(payloads));
     console.log(payloads);
  }

  const ApartementStatus = [
    {
      statusApart: "available",
    },
    {
      statusApart: "rented",
    },
    {
      statusApart: "sold",
    },
    {
      statusApart: "unavailable",
    },
  ];

  const rentSchema = [
    {
      schema: "daily",
    },
    {
      schema: "weekly",
    },
    {
      schema: "monthly",
    }
  ];

  const apartDirection = [
    {
      direction: "NORTH"
    },
    {
      direction: "NORTHEAST"
    },
    {
      direction: "EAST"
    },
    {
      direction: "SOUTHEAST"
    },
    {
      direction: "SOUTH"
    },
    {
      direction: "SOUTHWEST"
    },
    {
      direction: "WEST"
    },
    {
      direction: "NORTHWEST"
    },
  ];



  let payload = {...detail}

  return (
    <>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: "50%" }}>
          <h4>Edit Apartement</h4>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={payload}
            autoComplete="off"
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label="Floor"
              name="floor"
              rules={[
                {
                  required: true,
                  message: "Please input floor apartment !",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Unit"
              name="unitCode"
              rules={[
                {
                  required: true,
                  message: "Please input unit name!",
                },
              ]}
            >
              <Input
              />
            </Form.Item>
            <Form.Item
              label="Status"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please input status !",
                },
              ]}
            >
              <Select>
                {ApartementStatus.map((item) => {
                  return (
                    <Select.Option value={item.statusApart}>
                      {item.statusApart}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="Price"
              name="sellPrice"
              rules={[
                {
                  required: true,
                  message: "Please input price !",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Rental Price"
              name="rentPrice"
              rules={[
                {
                  required: true,
                  message: "Please input Transaction Price !",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Rental Schema"
              name="rentSchema"
              rules={[
                {
                  required: true,
                  message: "Please input Transction Date!",
                },
              ]}
            >
              <Select>
                {rentSchema.map((item) => {
                  return (
                    <Select.Option value={item.schema}>
                      {item.schema}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="Furnished"
              name="furnished"
              rules={[
                {
                  required: true,
                  message: "Please input Transction Date!",
                },
              ]}
            >
              <Select>
                <Select.Option value={true}>YES</Select.Option>
                <Select.Option value={false}>NO</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Balcony"
              name="balcony"
              rules={[
                {
                  required: true,
                  message: "Please input Transction Date!",
                },
              ]}
            >
              <Select>
                <Select.Option value={true}>YES</Select.Option>
                <Select.Option value={false}>NO</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Direction"
              name="direction"
              rules={[
                {
                  required: true,
                  message: "Please input Transction Date!",
                },
              ]}
            >
              <Select>
                {apartDirection.map((item) => {
                  return (
                    <Select.Option value={item.direction}>
                      {item.direction}
                    </Select.Option>
                  );
                })}
              </Select>
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

export default EditUnitApartement;
