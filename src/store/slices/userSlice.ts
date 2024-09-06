import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type UserState = {
  id: string;
  tg_id?: string;
  username?: string;
  email?: string;
  photoUrl?: string;
  firstName?: string;
  lastName?: string;
  languageCode?: string;
  role: string;
};

const initialState: UserState = {
  id: "undefined",
  tg_id: "undefined",
  username: "johndoe1990",
  firstName: "John",
  lastName: "Doe",
  email: "johndoe1990@test.com",
  role: "user",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.tg_id = action.payload.tg_id;
      state.username = action.payload?.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.languageCode = action.payload?.languageCode;
      state.photoUrl = action.payload?.photoUrl;
      state.role = action.payload?.role || "user";
    },
    setField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const field = action.payload.field;
      switch (field.toLowerCase()) {
        case "username": {
          state.username = action.payload.value;
          break;
        }
        case "email": {
          state.email = action.payload.value;
          break;
        }
        case "firstname": {
          state.firstName = action.payload.value;
          break;
        }
        case "lastname": {
          state.lastName = action.payload.value;
          break;
        }
        case "photourl": {
          state.photoUrl = action.payload.value;
          break;
        }
        default: {
          break;
        }
      }
    },
  },
});
export const { setUser, setField } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
