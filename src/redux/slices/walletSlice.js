import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    transactions: JSON.parse(localStorage.getItem("walletTransactions")) || [],
  },
  reducers: {
    addTrans: (state, action) => {
      state.transactions.push(action.payload);
      localStorage.setItem("walletTransactions", JSON.stringify(state.transactions));
    },
    removeTrans: (state, action) => {
      state.transactions.splice(action.payload, 1);
      localStorage.setItem("walletTransactions", JSON.stringify(state.transactions));
    },
  },
});

export const walletActions = walletSlice.actions;
export default walletSlice.reducer;
