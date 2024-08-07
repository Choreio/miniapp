import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import lpReducer from './slices/launchParametersSlice'
import tasksReducer from './slices/tasksSlice'
// ...

export const store = configureStore({
  reducer: {
    user:userReducer,
    lp:lpReducer,
    tasks:tasksReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>