import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import "./../Add.css";
import { connect } from "react-redux";
const { Option } = Select;

function Add(props) {
  let history = useHistory();

  let onFinish = (values) => {
    let key = props.bill.length + 1;
    let codebill = "#GF" + Math.random().toString().substr(2, 8);
    let userName = "Helen To";
    let accountId = "WS143356";
    let cusType = "Retailer";
    let country = "Vietnam";
    let email = "ipi@gmail.com";
    let quanCol = 5;
    let quanPro = 150;
    let sumCbm = 100;
    let quanContainer = "1*40HC";
    let sumBill = "$12,000";
    let valDeposit = "$ 6000";
    let valPay = "$ 6000";
    props.handleClickSubmit({
      ...values,
      key,
      codebill,
      userName,
      accountId,
      cusType,
      country,
      email,
      quanCol,
      quanPro,
      sumCbm,
      quanContainer,
      sumBill,
      valDeposit,
      valPay,
    });
  };

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 20 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="add">
      <img></img>
      <Form
        {...layout}
        name="basic"
        className="form"
        initialValues={{ remember: true }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        form={form}
        style={{ marginLeft: "350px", marginTop: "35px", height: "450px" }}
      >
        <h4>THÊM ĐƠN HÀNG</h4>
        <Form.Item
          label="Thời gian đặt hàng"
          className="formItem"
          name="date"
          rules={[
            { required: true, message: "Vui lòng nhập thời gian đặt hàng!" },
          ]}
        >
          <Input placeholder="29/09/2020 08:00 AM" style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item
          label="Trạng thái đơn hàng"
          className="formItem"
          name="states"
          rules={[
            { required: true, message: "Vui lòng chọn trạng thái đơn hàng!" },
          ]}
        >
          <Select
            placeholder="Chọn trạng thái đơn hàng"
            style={{ width: "500px" }}
          >
            <Option value="Đơn mới">Đơn mới</Option>
            <Option value="Yêu cầu đặt cọc">Yêu cầu đặt cọc</Option>
            <Option value="Hoàn tất đặt cọc">Hoàn tất đặt cọc</Option>
            <Option value="Đang soạn hàng">Đang soạn hàng</Option>
            <Option value="Hoàn tất gửi Ship">Hoàn tất gửi Ship</Option>
            <Option value="Gửi yêu cầu thanh toán">
              Gửi yêu cầu thanh toán
            </Option>
            <Option value="Đơn hàng hoàn tất">Đơn hàng hoàn tất</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Tên KH/Doanh nghiệp"
          className="formItem"
          name="comName"
          rules={[
            { required: true, message: "Vui lòng nhập tên KH/Doanh nghiệp!" },
          ]}
        >
          <Input
            placeholder="Tập đoàn kinh doanh đá bào"
            style={{ width: "500px" }}
          />
        </Form.Item>

        <Form.Item
          label="Giá tiền"
          className="formItem"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá tiền!" }]}
        >
          <Input placeholder="20.000.000 đ" style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item
          label="Custom Request"
          className="formItem"
          name="cusReq"
          rules={[{ required: true, message: "Vui lòng chọn Custom Request!" }]}
        >
          <Select placeholder="Chọn Custom Request" style={{ width: "500px" }}>
            <Option value="Có đơn">Có đơn</Option>
            <Option value="Không có đơn">Không có đơn</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout} className="btn">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              htmlType="submit"
              style={{
                marginLeft: "290px",
                marginTop: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
              // onClick={() => {
              //   props.handleClickSubmit(bill);
              // }}
            >
              Submit
            </Button>
            <Button
              htmlType="submit"
              style={{
                marginLeft: "15px",
                marginTop: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
              onClick={() => {
                history.push("/bill");
              }}
            >
              Back
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    bill: state.BillReducer.Bill,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSubmit: (bill) => {
      dispatch({
        type: "ADD_BILL",
        data: bill,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);
