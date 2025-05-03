import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSclice({
    name:"user",
    initialState:{
        user:null
    },
    reducer:{
        //ction
        setUser:(state,asction)=>{
            state.user = asction.payload;
        }
    }
});
export const {setUser} =userSlice.actions;
export default userSlice.reducer;
