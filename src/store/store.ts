import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import lpReducer from "./slices/launchParametersSlice";
import tasksReducer from "./slices/tasksSlice";
import geolocationReducer from "./slices/locationSlice";
import editedStateReducer from "./slices/changesStateSlice";
// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    changesState: editedStateReducer,
    lp: lpReducer,
    tasks: tasksReducer,
    geolocation: geolocationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
