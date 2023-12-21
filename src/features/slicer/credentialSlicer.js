import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { userApi } from "../../services/useApi";
//REDUCER
export const credentialSlice = createSlice({
  name: "credential",
  initialState: {
    value: false,
    token: "",
  },
  reducers: {
    logOut: (state) => {
      state.value = false;
    },
    update: (state, action) => {
      console.log(action);
      //state.value = action.payload;
      state.value = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase('api/executeMutation/fulfilled', (state,action) => {
      //   //const chatChannels = action?.payload?.chat_channels;
      //   console.log(state,action);
      //   let newToken = action?.payload?.token;
      //   const hasToken = action?.payload?.token ? true : false;
      //   return {...state, token:newToken, value:hasToken}
      // })
      .addMatcher(userApi.endpoints.signin.matchFulfilled, (state, action) => {
        console.log(state, action);
        let newToken = action?.payload?.token;

        return { ...state, token: newToken, value: true };
      })
      .addMatcher(userApi.endpoints.signout.matchFulfilled, (state, action) => {
        console.log(state, action);
        let newToken = action?.payload?.token;

        return { ...state, token: newToken, value: false };
      });
  },
});

// Action creators are generated for each case reducer function
export const { logOut, update } = credentialSlice.actions;

export default credentialSlice.reducer;
