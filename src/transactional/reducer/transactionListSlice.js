import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api/listApi";

const data = {
  transactions: [
    {
      id: 1,
      unitId: 3,
      residentId: 1,
      transactionDate: new Date(),
      rentStartDate: "",
      rentEndDate: "",
      billingDate: "",
      period: null,
      price: 550000000,
      profit: 50000000,
    },
    {
      id: 2,
      unitId: 2,
      residentId: 3,
      transactionDate: new Date("2015-03-25"),
      rentStartDate: "",
      rentEndDate: "",
      billingDate: "",
      period: null,
      price: 650000000,
      profit: 103500000,
    },
    {
      id: 3,
      unitId: 1,
      residentId: 2,
      transactionDate: new Date("2016-03-25"),
      rentStartDate: "",
      rentEndDate: "",
      billingDate: "",
      period: null,
      price: 750000000,
      profit: 2150000,
    },
  ],
  residents: [
    {
      id: 1,
      fullname: "Agus",
      email: "agus@mail.com",
      phone: "123456",
      maritalStatus: "single",
      dependents: 0,
      birthDate: "2000-08-01",
    },
    {
      id: 2,
      fullname: "Septi",
      email: "septi@mail.com",
      phone: "234567",
      maritalStatus: "single",
      dependents: 0,
      birthDate: "2000-09-01",
    },
    {
      id: 3,
      fullname: "Okta",
      email: "okta@mail.com",
      phone: "345678",
      maritalStatus: "single",
      dependents: 0,
      birthDate: "2000-10-01",
    },
  ],
  units: [
    {
      id: 1,
      unitCode: "10AA",
      floor: 10,
      rooms: 2,
      direction: 0,
      status: "available",
      balcony: true,
      furnished: true,
      rentPrice: 4000000,
      rentSchema: "monthly",
      sellPrice: 500000000,
    },
    {
      id: 2,
      unitCode: "10AB",
      floor: 10,
      rooms: 2,
      direction: 2,
      status: "available",
      balcony: false,
      furnished: false,
      rentPrice: 3500000,
      rentSchema: "monthly",
      sellPrice: 400000000,
    },
    {
      id: 3,
      unitCode: "10BA",
      floor: 10,
      rooms: 2,
      direction: 4,
      status: "sold",
      balcony: true,
      furnished: true,
      rentPrice: 5000000,
      rentSchema: "monthly",
      sellPrice: 500000000,
    },
  ],
};

const initialState = {
  transactions: [],
  units: [],
  residents: [],
  status: {
    isLoading: true,
    action: new Date().getTime(),
  },
};

export const fetchUnits = createAsyncThunk("units/get", async () => {
  const response = await API.getUnits();
  return response;
});

export const fetchTransactions = createAsyncThunk(
  "transactions/get",
  async () => {
    const response = await API.getAllTransactionList();
    return response;
  }
);

export const fetchResidents = createAsyncThunk("residents/get", async () => {
  const response = await API.getResident();
  return response;
});

export const transactionListSlice = createSlice({
  name: "transaction-list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnits.fulfilled, (state, action) => {
        // state.status.isLoading = false;
        state.units = action.payload;
      })
      .addCase(fetchUnits.pending, (state, action) => {
        state.status.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        // state.status.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.pending, (state, action) => {
        state.status.isLoading = true;
      })
      .addCase(fetchResidents.fulfilled, (state, action) => {
        state.status.isLoading = false;
        state.residents = action.payload;
      })
      .addCase(fetchResidents.pending, (state, action) => {
        state.status.isLoading = true;
      });
  },
});
