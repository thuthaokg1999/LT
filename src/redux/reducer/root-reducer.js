import { combineReducers } from "redux";
import BillReducer from "./redux_bill";

export const RootReducer = combineReducers({
  BillReducer,
});
