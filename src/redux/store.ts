import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userInfoReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: { userInfo: userInfoReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
