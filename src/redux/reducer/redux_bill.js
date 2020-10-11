import { notification } from "antd";

let initialState = {
  Obj_detail: {},

  Product_info: [
    {
      key: 1,
      collection: "[ CHARLIE ]",
      sku: 150,
      name: "High board",
      img:
        "https://cdn3.iconfinder.com/data/icons/school-glyph/512/Furniture_school_table-256.png",
      size: "90cm x 150cm",
      material: "Gỗ tự nhiên",
      color: "Xanh dương",
      metal: "Đồng",
      hw: "Móc đồng",
      cbm: 45,
      billtype: "Đơn thường",
      price: "20.000.000 đ",
      quantity: 2,
      amount: "40.000.000 đ",
      detail: "Chi tiết sản phẩm",
    },
    {
      key: 2,
      collection: "[ CHARLIE ]",
      sku: 150,
      name: "High board",
      img:
        "https://cdn3.iconfinder.com/data/icons/school-glyph/512/Furniture_school_table-256.png",
      size: "90cm x 150cm",
      material: "Gỗ tự nhiên",
      color: "Xanh dương",
      metal: "Đồng",
      hw: "Móc đồng",
      cbm: 45,
      billtype: "Catalogue",
      price: "20.000.000 đ",
      quantity: 2,
      amount: "40.000.000 đ",
      detail: "Chi tiết sản phẩm",
    },
    {
      key: 3,
      collection: "[ CHARLIE ]",
      sku: 150,
      name: "High board",
      img:
        "https://cdn3.iconfinder.com/data/icons/school-glyph/512/Furniture_school_table-256.png",
      size: "90cm x 150cm",
      material: "Gỗ tự nhiên",
      color: "Xanh dương",
      metal: "Đồng",
      hw: "Móc đồng",
      cbm: 45,
      billtype: "Catalogue",
      price: "20.000.000 đ",
      quantity: 2,
      amount: "40.000.000 đ",
      detail: "Chi tiết sản phẩm",
    },
    {
      key: 4,
      collection: "[ CHARLIE ]",
      sku: 150,
      name: "High board",
      img:
        "https://cdn3.iconfinder.com/data/icons/school-glyph/512/Furniture_school_table-256.png",
      size: "90cm x 150cm",
      material: "Gỗ tự nhiên",
      color: "Xanh dương",
      metal: "Đồng",
      hw: "Móc đồng",
      cbm: 45,
      billtype: "Catalogue",
      price: "20.000.000 đ",
      quantity: 2,
      amount: "40.000.000 đ",
      detail: "Chi tiết sản phẩm",
    },
  ],

  Bill: [
    {
      key: 1,
      codebill: "#GF12337671",
      date: "29/09/2020 08:00 AM",
      states: "Đơn mới",
      comName: "Taylor Swift",
      price: "20.000.000 đ",
      cusReq: "Có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Taylor Swift",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "taylor@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 2,
      codebill: "#GF12337672",
      date: "29/09/2020 08:00 AM",
      states: "Yêu cầu đặt cọc",
      comName: "Sasha Sloan",
      price: "20.000.000 đ",
      cusReq: "Không có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Sasha Sloan",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "sasha@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 3,
      codebill: "#GF12337673",
      date: "29/09/2020 08:00 AM",
      states: "Hoàn tất đặt cọc",
      comName: "Alec Benjamin",
      price: "20.000.000 đ",
      cusReq: "Không có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Alec Benjamin",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "alec@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 4,
      codebill: "#GF12337674",
      date: "29/09/2020 08:00 AM",
      states: "Đang soạn hàng",
      comName: "Ed Sheeran",
      price: "20.000.000 đ",
      cusReq: "Không có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Ed Sheeran",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United Kingdom",
      email: "ed@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 5,
      codebill: "#GF12337675",
      date: "29/09/2020 08:00 AM",
      states: "Hoàn tất gửi Ship",
      comName: "Demi Lovato",
      price: "20.000.000 đ",
      cusReq: "Không có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Demi Lovato",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "demi@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 6,
      codebill: "#GF12337676",
      date: "29/09/2020 08:00 AM",
      states: "Gửi yêu cầu thanh toán",
      comName: "Selena Gomez",
      price: "20.000.000 đ",
      cusReq: "Có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Selena Gomez",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "selena@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 7,
      codebill: "#GF12337677",
      date: "29/09/2020 08:00 AM",
      states: "Đơn hàng hoàn tất",
      comName: "Allie X",
      price: "20.000.000 đ",
      cusReq: "Có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Allie X",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "alliex@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 8,
      codebill: "#GF12337678",
      date: "29/09/2020 08:00 AM",
      states: "Đơn hàng hoàn tất",
      comName: "Bruno Mars",
      price: "20.000.000 đ",
      cusReq: "Có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Bruno Mars",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "bruno@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 9,
      codebill: "#GF12337679",
      date: "29/09/2020 08:00 AM",
      states: "Đơn hàng hoàn tất",
      comName: "Ava Max",
      price: "20.000.000 đ",
      cusReq: "Không có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Ava Max",
      accountId: "WS143356",
      cusType: "Retailer",
      country: "United States",
      email: "ava@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$12,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
    {
      key: 10,
      codebill: "#GF12337680",
      date: "29/09/2020 08:00 AM",
      states: "Đơn hàng hoàn tất",
      comName: "Tập đoàn bán đá bào",
      price: "70.000.000 đ",
      cusReq: "Có đơn",
      detail: "Chi tiết đơn hàng",
      userName: "Quyên CEO và đồng bọn",
      accountId: "WS143356",
      cusType: "CEO",
      country: "Vietnam",
      email: "dabao@gmail.com",
      quanCol: 5,
      quanPro: 150,
      sumCbm: 100,
      quanContainer: "1*40HC",
      sumBill: "$120,000",
      valDeposit: "$ 6000",
      valPay: "$ 6000",
    },
  ],
};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_BILL":
      let list = [...state.Bill];
      const vt = list.findIndex((item) => {
        return item.key === action.data;
      });
      list.splice(vt, 1);
      state.Bill = list;
      notification["warning"]({
        message: "Xóa thành công",
      });
      return { ...state };

    case "ADD_BILL":
      state.Bill.push(action.data);
      console.log(action.data);
      notification["success"]({
        message: "Thêm thành công",
      });
      return { ...state };

    case "BILL_DETAIL":
      let lt = [...state.Bill];
      const obj = lt.find((item) => {
        return item.key === action.data;
      });
      state.Obj_detail = obj;
      console.log(state.Obj_detail);
      return { ...state };

    case "EDIT_BILL":
      console.log(action.data);
      let Bill = [...state.Bill];
      Bill.filter((db, index) => {
        if (db.key === action.data.key) {
          Bill[index] = action.data;
        }
      });
      state.Bill = Bill;
      notification["success"]({
        message: "Sửa thành công",
      });
      return { ...state };

    default:
      return { ...state };
  }
};
export default BillReducer;
