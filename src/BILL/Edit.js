import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import "./../Add.css";
import { connect } from "react-redux";
const { Option } = Select;

function About(props) {
  let history = useHistory();

  useEffect(() => {
    let { o_detail } = props;
    form.setFieldsValue({
      key: o_detail.key,
      codebill: o_detail.codebill,
      date: o_detail.date,
      states: o_detail.states,
      comName: o_detail.comName,
      price: o_detail.price,
      cusReq: o_detail.cusReq,
    });
  }, []);

  let onFinish = (values) => {
    let codebill = props.o_detail.codebill;
    let userName = props.o_detail.userName;
    let accountId = props.o_detail.accountId;
    let cusType = props.o_detail.cusType;
    let country = props.o_detail.country;
    let email = props.o_detail.email;
    let quanCol = props.o_detail.quanCol;
    let quanPro = props.o_detail.quanPro;
    let sumCbm = props.o_detail.sumCbm;
    let quanContainer = props.o_detail.quanContainer;
    let sumBill = props.o_detail.sumBill;
    let valDeposit = props.o_detail.valDeposit;
    let valPay = props.o_detail.valPay;
    props.handleClickSubmit({
      ...values,
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
    <div className="edit">
      <img></img>
      <Form
        {...layout}
        name="basic"
        className="form"
        initialValues={{ remember: true }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        form={form}
        style={{
          marginLeft: "310px",
          marginTop: "20px",
          height: "530px",
          width: "780px",
        }}
      >
        <h4>SỬA ĐƠN HÀNG</h4>
        <Form.Item label="ID" className="formItem" name="key">
          <Input style={{ width: "500px" }} disabled />
        </Form.Item>
        <Form.Item label="Mã đơn hàng" className="formItem" name="codebill">
          <Input style={{ width: "500px" }} disabled />
        </Form.Item>
        <Form.Item
          label="Thời gian đặt hàng"
          className="formItem"
          name="date"
          rules={[
            { required: true, message: "Vui lòng nhập thời gian đặt hàng!" },
          ]}
        >
          <Input style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item
          label="Trạng thái đơn hàng"
          className="formItem"
          name="states"
          rules={[
            { required: true, message: "Vui lòng nhập trạng thái đơn hàng!" },
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
          <Input style={{ width: "500px" }} />
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
          rules={[{ required: true, message: "Vui lòng nhập Custom Request!" }]}
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
                marginTop: "5px",
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
                marginTop: "5px",
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
    o_detail: state.BillReducer.Obj_detail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSubmit: (bill) => {
      dispatch({
        type: "EDIT_BILL",
        data: bill,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
