import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    newUser: null,
  },
  reducers: {
    SignIn: (state, action) => {
      state.currentUser = action.payload;
    },

    Logout: (state) =>{
      state.currentUser = null;
      state.newUser = null
    },
    SignUp: (state, action) =>{
      state.newUser = action.payload;
    }
    
  }
});

export const { SignIn, Logout, SignUp} = UserSlice.actions;
export default UserSlice.reducer;