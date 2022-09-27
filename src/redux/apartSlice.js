import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getAllTransactionList,getUnits,getResident,postTransactions } from "../api/listApi";
const initialState = {
  transactional: [],
  units: [],
  residents:[],
  status: "done",
};

export const getListTransaction = createAsyncThunk("apart/fetchDataTransactional", async () => {
  const response = await getAllTransactionList();
  return response;
});

export const getListUnits = createAsyncThunk(
  "apart/fetchDataUnits",
  async () => {
    const response = await getUnits();
    return response;
  }
);


export const getListResident = createAsyncThunk(
  "apart/fetchDataResident",
  async () => {
    const response = await getResident();
    return response;
  }
);

export const postTransactional = createAsyncThunk(
  "apart/postTransactional",
  async (payload) => {
    const response = await postTransactions(payload);
    return response;
  }
);

export const apartSlice = createSlice({
  name: "apart",
  initialState,
  reducers: {
    getdata: (state) => {
      return state;
    },
    filterByRadio: (state, action) => {
      switch (action.payload.type) {
        case "All":
          state.todo = action.payload.data;
          break;
        case "Active":
          state.todo = action.payload.data.filter(
            (item) => item.completed === false
          );
          break;
        case "Completed":
          state.todo = action.payload.data.filter(
            (item) => item.completed === true
          );
          break;
        default:
          state.todo = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getListTransaction.fulfilled, (state, action) => {
        state.status = "done";
        state.transactional = action.payload;
      })
      .addCase(getListUnits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getListUnits.fulfilled, (state, action) => {
        state.status = "done";
        state.units = action.payload;
      })
      .addCase(getListResident.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getListResident.fulfilled, (state, action) => {
        state.status = "done";
        state.residents = action.payload;
      })
      .addCase(postTransactional.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postTransactional.fulfilled, (state, action) => {
        state.status = "done";
      });
  },
});

export const { getdata, filterByRadio } = apartSlice.actions;
// export default apartSlice.reducer;
