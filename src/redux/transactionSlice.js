import {
  createAction,
  createAsyncThunk,
  createSlice,
  current,
} from "@reduxjs/toolkit";
import * as API from "../api/listApi";

const initialState = {
  transactions: [],
  units: [],
  residents: [],
  status: {
    isLoading: true,
    action: new Date().getTime(),
    asc: true,
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
// export const filterByName = createAction('filterByName');

export const transactionSlice = createSlice({
  name: "transaction-list",
  initialState,
  reducers: {
    filterByName: (state, action) => {
      state.transactions = action.payload;
    },
    refreshList: (state, action) => {
      state.status.isLoading = false;
      state.status.action = new Date().getTime();
    },
    sortByProfit: (state, action) => {
      if (state.status.asc) {
        state.transactions.sort((a, b) => a.profit - b.profit);
        state.status.asc = false;
      } else {
        state.transactions.sort((a, b) => b.profit - a.profit);
        state.status.asc = true;
      }
    },
    filterByStatus: (state, action) => {
      //belum
    },
    filterByFloor: (state, action) => {
      //belum
    },
    sortByDate: (state, action) => {
      if (state.status.asc) {
        state.transactions.sort((a, b) => {
          const x = Date.parse(a.transactionDate);
          const y = Date.parse(b.transactionDate);
          return (
            // Number(a.transactionDate.slice(0, 2) + a.transactionDate.slice(8)) -
            // Number(b.transactionDate.slice(0, 2) + b.transactionDate.slice(8))
            x - y
          );
        });
        state.status.asc = false;
      } else {
        state.transactions.sort(
          (a, b) => {
            const x = Date.parse(a.transactionDate);
            const y = Date.parse(b.transactionDate);
            return y - x;
          }
          // Number(b.transactionDate.slice(0, 2) + b.transactionDate.slice(8)) -
          // Number(a.transactionDate.slice(0, 2) + a.transactionDate.slice(8))
        );
        state.status.asc = true;
      }
    },
  },
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

export const {
  filterByName,
  refreshList,
  sortByProfit,
  sortByDate,
  filterByFloor,
  filterByStatus,
} = transactionSlice.actions;
