import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type changesStateType = {
  editedUser: boolean;
  editedTasks: string[];
  createdTask: boolean;
};

const initialState: changesStateType = {
  editedUser: false,
  editedTasks: [],
  createdTask: false,
};

export const editedStateSlice = createSlice({
  name: "changesState",
  initialState,
  reducers: {
    setUserEdited: (state, action: PayloadAction<boolean>) => {
      state.editedUser = action.payload;
    },
    addEditedTask: (state, action: PayloadAction<string>) => {
      if (
        state.editedTasks.findIndex((taskId) => taskId === action.payload) ===
        -1
      )
        state.editedTasks.push(action.payload);
    },
    deleteEditedTask: (state, action: PayloadAction<string>) => {
      const index = state.editedTasks.findIndex(
        (task) => task === action.payload
      );
      if (index > -1) state.editedTasks.splice(index, 1);
    },
    setTaskCreated: (state, action: PayloadAction<boolean>) => {
      state.createdTask = action.payload;
    },
  },
});
export const {
  setUserEdited,
  addEditedTask,
  deleteEditedTask,
  setTaskCreated,
} = editedStateSlice.actions;

export const isTaskCreated = (state: RootState) =>
  state.changesState.createdTask;
export const isUserEdited = (state: RootState) => state.changesState.editedUser;
export const isTaskEdited = (state: RootState, taskId: string) =>
  state.changesState.editedTasks.findIndex((task) => task === taskId) > -1
    ? true
    : false;
export const anyTaskEdited = (state: RootState) =>
  state.changesState.editedTasks.length > 0 ? true : false;

export default editedStateSlice.reducer;
