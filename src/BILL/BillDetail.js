import React, { useState } from "react";
import { Card, Table, Tag, Image, Button } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function BillDetail(props) {
  let history = useHistory();

  function click() {
    history.push("/bill");
  }

  //#region ------table-columns--------
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      render: (key) => {
        return <div style={{ textAlign: "center" }}>{key}</div>;
      },
    },
    {
      title: "Collection ",
      dataIndex: "collection",
      key: "collection",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Tên sản phẩm ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render: (img) => {
        return (
          <div>
            <Image width={35} alt="table" src={img} />
          </div>
        );
      },
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Chất liệu gỗ",
      dataIndex: "material",
      key: "material",
    },
    {
      title: "Màu gỗ",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Kim loại",
      dataIndex: "metal",
      key: "metal",
    },
    {
      title: "Hardware",
      dataIndex: "hw",
      key: "hw",
    },
    {
      title: (
        <div>
          <span>CBM</span>
          <br></br>
          <span
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "11px",
              marginTop: "0px",
            }}
          >
            mỗi hộp
          </span>
        </div>
      ),
      dataIndex: "cbm",
      key: "cbm",
      render: (cbm) => {
        return <div style={{ textAlign: "center" }}>{cbm}</div>;
      },
    },
    {
      title: "Loại đơn",
      dataIndex: "billtype",
      key: "billtype",
      render: (billtype) => {
        let color = "geekblue";

        if (billtype === "Đơn thường") {
          color = "#40a9ff";
        } else if (billtype === "Catalogue") {
          color = "orange";
        }
        return (
          <div>
            <span style={{ color: color, fontWeight: "bold" }}>{billtype}</span>
          </div>
        );
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity) => {
        return <div style={{ textAlign: "center" }}>{quantity}</div>;
      },
    },
    {
      title: "Thành tiền",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "",
      dataIndex: "detail",
      key: "detail",
      render: (tag) => {
        return (
          <Tag
            onClick={() => click()}
            color={"cyan"}
            key={tag}
            style={{ borderRadius: "5px" }}
          >
            {tag}
          </Tag>
        );
      },
    },
  ];
  //#endregion

  return (
    <div className="b_detail">
      <button className="backbill" onClick={() => click()}>
        Back
      </button>

      <br></br>
      <div className="site-card-border-less-wrapper cards">
        {/* CARD 1 */}
        <Card
          title="THÔNG TIN NGƯỜI ĐẶT HÀNG"
          bordered={true}
          style={{ marginLeft: "20px" }}
          className="cardItem"
        >
          <div>
            <p style={{ fontWeight: "bolder" }}>{props.o_detail.comName}</p>
            {console.log(props.o_detail)}
            <p className="before">
              Người đại diện:
              <span className="after" style={{ marginLeft: "100px" }}>
                {props.o_detail.userName}
              </span>
            </p>
            <p className="before">
              Account ID:
              <span className="after" style={{ marginLeft: "122px" }}>
                {props.o_detail.accountId}
              </span>
            </p>
            <p className="before">
              Loại khách hàng:
              <span className="after" style={{ marginLeft: "90px" }}>
                {props.o_detail.cusType}
              </span>
            </p>
            <p className="before">
              Quốc gia:
              <span className="after" style={{ marginLeft: "133px" }}>
                {props.o_detail.country}
              </span>
            </p>
            <p className="before">
              Email:{" "}
              <span className="after" style={{ marginLeft: "150px" }}>
                {props.o_detail.email}
              </span>
            </p>
            <p className="before">
              Custom Request:
              <span className="after" style={{ marginLeft: "90px" }}>
                {props.o_detail.cusReq}
              </span>
            </p>
          </div>
          {/* ); */}
          {/* })} */}

          <a
            onClick={() => click()}
            style={{ float: "right", color: "#1890ff", fontStyle: "italic" }}
          >
            Xem chi tiết
            <img
              width={18}
              alt="table"
              src="https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/69_Arrow_Right_Direction_Wayfinding-256.png"
            ></img>
          </a>
        </Card>

        {/* CARD 2 */}
        <Card
          title="TÓM TẮT ĐƠN HÀNG"
          bordered={true}
          style={{ marginLeft: "20px" }}
          className="cardItem"
        >
          <div>
            <p className="before">
              Thời gian đặt hàng:
              <span className="after" style={{ marginLeft: "100px" }}>
                {props.o_detail.date ? props.o_detail.date.slice(0, 10) : ""}
              </span>
              <span
                style={{ color: "gray", fontSize: "11px", marginLeft: "3px" }}
              >
                {props.o_detail.date ? props.o_detail.date.slice(11) : ""}
              </span>
            </p>
            <p className="before">
              Số lượng collection:
              <span className="after" style={{ marginLeft: "100px" }}>
                {props.o_detail.quanCol}
              </span>
            </p>
            <p className="before">
              Số lượng sản phẩm:
              <span className="after" style={{ marginLeft: "97px" }}>
                {props.o_detail.quanPro}
              </span>
            </p>
            <p className="before">
              Tổng CBM của đơn hàng:
              <span className="after" style={{ marginLeft: "65px" }}>
                {props.o_detail.sumCbm}
              </span>
            </p>
            <p className="before">
              Số lượng container:
              <span className="after" style={{ marginLeft: "100px" }}>
                {props.o_detail.quanContainer}
              </span>
            </p>
            <p className="before">
              Tổng giá trị đơn hàng:{" "}
              <span
                className="after"
                style={{ marginLeft: "80px", color: "#1890ff" }}
              >
                {props.o_detail.sumBill}
              </span>
            </p>
            <p className="before">
              Giá trị đặt cọc:
              <span className="after" style={{ marginLeft: "130px" }}>
                {props.o_detail.valDeposit}
              </span>
            </p>
            <p className="before">
              Giá trị khoản thanh toán sau:
              <span className="after" style={{ marginLeft: "45px" }}>
                {props.o_detail.valPay}
              </span>
            </p>
          </div>
        </Card>

        {/* CARD 3 */}
        <Card
          bordered={true}
          style={{ marginLeft: "20px" }}
          className="cardItem"
        >
          <div className="flex-first">
            <p className="beforec3" style={{ fontWeight: "bold" }}>
              Forwarder{" "}
            </p>
          </div>
          <div className="flex-mid">
            <p className="beforec3" style={{ fontWeight: "bold" }}>
              Post of Discharge{" "}
            </p>
          </div>
          <div className="flex-btn">
            <form onClick={() => click()}>
              <button
                className="before-btn"
                style={{ float: "right" }}
                type="submit"
              >
                Yêu cầu thông tin
              </button>
            </form>
          </div>
        </Card>
      </div>
      {/* TABLE */}
      <div className="table">
        <h2>THÔNG TIN SẢN PHẨM</h2>
        <Table
          dataSource={props.pro_info}
          style={{ width: "max-content" }}
          columns={columns}
        />
        <div
          className="flex"
          style={{ float: "right", height: "30px", marginBottom: "7px" }}
        >
          <p style={{ fontWeight: "bold" }}>TỔNG CỘNG </p>
          <p
            className="after"
            style={{ marginLeft: "50px", fontWeight: "bold" }}
          >
            160.100.000 đ
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    o_detail: state.BillReducer.Obj_detail,
    pro_info: state.BillReducer.Product_info,
  };
};

export default connect(mapStateToProps, null)(BillDetail);
