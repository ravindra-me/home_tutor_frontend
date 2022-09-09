import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

interface UserState {
  alertInfo: {
    open: boolean;
    message: string;
  };
}

const initialState: UserState = {
  alertInfo: {
    open: false,
    message: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateAlertInfo: (
      state,
      action: PayloadAction<{ open: boolean; message: string }>
    ) => {
      const { message, open } = action.payload;
      return {
        ...state,
        alertInfo: {
          ...state.alertInfo,
          message,
          open,
        },
      };
    },
  },
});

export const { updateAlertInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
