import { createAsyncThunk } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import * as apartmentAPI from

const initialState = {
    units: [],
    isLoading: true,
    action: new Date().getTime(),
}

const name = 'unit';

export const fetchUnit = createAsyncThunk(
    'units/getAll',
    async () => {
        const units = await apartmentAPI.getAllUnits();

        console.log('fetchUnits', units);
        return units;
    }
);

export const createUnit = createAsyncThunk( 
    'units/create', 
    async (unit) => { 
        unit.id = uniqid();
        const unitData = await apartmentAPI.createUnit(unit); 

        console.log('createUnit', unitData);
        return unitData;
    }
);

export const updateUnit = createAsyncThunk( 
    'unit/update', 
    async (unit) => { 
        const unitData = await apartmentAPI.updateUnit(unit); 

        console.log('updateUnit', unitData);
        return unitData;
    }
);

export const deleteUnit = createAsyncThunk( 
    'unit/delete', 
    async (unit) => { 
        await apartmentAPI.deleteUnit(unit.id); 

        return unit;
    }
);

export const apartmentSlice = createSlice({//2
    name,
    initialState, //properti

    extraReducers: (builder) => { //4 menerima parameter builder, listener untuk actions yang terjadi diluar reducers slice
        builder//14 panggil thunk

        .addCase(fetchUnits.pending, (state) => {
            //15 fetchGuest itu returnya promise, addCase ketika fetchGuest.pending statusnya pending, belum di request, belum fullfilled
        state.isLoading = true; //16 kita state true
        }) 
        .addCase(fetchUnits.fulfilled, (state, action) => {
            //17 ketika fetchGuest sudah fullfill/ resolve. action kita dapat dari -return guests;- nantinya akan jadi payload
            state.isLoading = false;//18
            state.units = action.payload;//19 isinya guests yang direturn dari method thunk fetchGuests
        })


        .addCase(createUnit.pending, (state) => {
            //15 fetchGuest itu returnya promise, addCase ketika fetchGuest.pending statusnya pending, belum di request, belum fullfilled
        state.isLoading = true; //16 kita state true
        }) 
        .addCase(createUnit.fulfilled, (state, action) => {
            //17 ketika fetchGuest sudah fullfill/ resolve. action kita dapat dari -return guests;- nantinya akan jadi payload
            state.isLoading = false;//18
            state.action = new Date().getTime();
        })


        .addCase(deleteUnit.pending, (state) => {
            //15 fetchGuest itu returnya promise, addCase ketika fetchGuest.pending statusnya pending, belum di request, belum fullfilled
        state.isLoading = true; //16 kita state true
        }) 
        .addCase(deleteUnit.fulfilled, (state, action) => {
            //17 ketika fetchGuest sudah fullfill/ resolve. action kita dapat dari -return guests;- nantinya akan jadi payload
            state.isLoading = false;//18
            state.action = new Date().getTime();
        })


        .addCase(updateUnit.pending, (state) => {
            //15 fetchGuest itu returnya promise, addCase ketika fetchGuest.pending statusnya pending, belum di request, belum fullfilled
        state.isLoading = true; //16 kita state true
        }) 
        .addCase(updateUnit.fulfilled, (state, action) => {
            //17 ketika fetchGuest sudah fullfill/ resolve. action kita dapat dari -return guests;- nantinya akan jadi payload
            state.isLoading = false;//18
            state.action = new Date().getTime();
            
        });
    },
});

// export const { addGuest, updateGuest, deleteGuest } = guestSlice.actions; //8 untuk mendapatkan action"nya, akan di export actionnya
// export default guestSlice.reducer;  //9 untuk mendapatkan reducernya