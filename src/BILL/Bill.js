import { Table, Tag } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  CheckCircleOutlined,
  ContainerOutlined,
  QuestionCircleOutlined,
  LikeOutlined,
  MailOutlined,
  StrikethroughOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import "./../App.css";
import { connect } from "react-redux";

function Bill(props) {
  let history = useHistory();

  function handleClickAdd(key) {
    history.push("/add");
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  // const [dt, setDt] = useState(props.bill);

  // function handleDelete(key) {
  //   console.log(dt);
  //   let arr = [...dt];
  //   console.log(arr);
  //   // const vt = dt.findIndex((item) => {
  //   //   return item.key === key;
  //   // });
  //   // arr.splice(vt, 1);
  //   // setDt(arr);
  // }

  //#region ----columns----
  const columns = [
    // {
    //   title: "STT",
    //   dataIndex: "key",
    //   key: "key",
    //   render: (key) => {
    //     return <div style={{ textAlign: "center" }}>{key}</div>;
    //   },
    // },
    {
      title: "Mã đơn hàng",
      dataIndex: "codebill",
      key: "codebill",
    },
    {
      title: "Thời gian đặt hàng",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        var string = date.substring(0, 10);
        var str = date.slice(11);
        return (
          <div style={{ width: "130px" }}>
            <span>{string} </span>
            <span style={{ color: "gray", fontSize: "11px" }}>{str}</span>
          </div>
        );
      },
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "states",
      key: "states",
      render: (states) => {
        let color = "red";
        let icon = "";
        switch (states) {
          case "Đơn mới":
            icon = <ContainerOutlined />;
            color = "orange";
            break;
          case "Yêu cầu đặt cọc":
            icon = <QuestionCircleOutlined />;
            color = "red";
            break;
          case "Hoàn tất đặt cọc":
            icon = <LikeOutlined />;
            color = "blue";
            break;
          case "Đang soạn hàng":
            icon = <MailOutlined />;
            color = "geekblue";
            break;
          case "Hoàn tất gửi Ship":
            icon = <CarryOutOutlined />;
            color = "purple";
            break;
          case "Gửi yêu cầu thanh toán":
            icon = <StrikethroughOutlined />;
            color = "magenta";
            break;
          case "Đơn hàng hoàn tất":
            icon = <CheckCircleOutlined />;
            color = "success";
            break;
          default:
            break;
        }
        return (
          <div>
            <Tag
              icon={icon}
              color={color}
              key={states}
              style={{ borderRadius: "5px", fontWeight: "bold" }}
            >
              {states}
            </Tag>
          </div>
        );
      },
    },
    {
      title: "Tên KH/Doanh nghiệp",
      dataIndex: "comName",
      key: "comName",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Customer Request",
      dataIndex: "cusReq",
      key: "cusReq",
      render: (cusReq) => {
        let color = "red";
        if (cusReq === "Có đơn") {
          color = "green";
        } else {
          color = "red";
        }
        return (
          <div>
            <span style={{ color: color, fontWeight: "bold" }}>{cusReq}</span>
          </div>
        );
      },
    },
    {
      title: (
        <button className="btnAdd" onClick={() => handleClickAdd()}>
          Thêm đơn hàng
        </button>
      ),
      dataIndex: "key",
      key: "detail",
      render: (tags) => (
        <>
          <div className="row" style={{ marginRight: "5px" }}>
            <Tag
              onClick={() => {
                props.handleBillDetail(tags);
                history.push("/bill_detail");
              }}
              color={"cyan"}
              style={{ borderRadius: "5px" }}
            >
              Chi tiết đơn hàng
            </Tag>
            <Tag
              color="green"
              onClick={() => {
                props.handleClickEdit(tags);
                history.push("edit");
              }}
            >
              Sửa
            </Tag>
            <Tag
              color="red"
              key={tags}
              onClick={() => {
                props.handleDetete(tags);
              }}
            >
              Xóa
            </Tag>
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={props.bill} //json
        rowSelection={{ rowSelection }}
        columns={columns}
      />
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
    handleDetete: (id) => {
      dispatch({
        type: "DELETE_BILL",
        data: id,
      });
    },
    handleBillDetail: (id) => {
      dispatch({
        type: "BILL_DETAIL",
        data: id,
      });
    },
    handleClickEdit: (id) => {
      dispatch({
        type: "BILL_DETAIL",
        data: id,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bill);
