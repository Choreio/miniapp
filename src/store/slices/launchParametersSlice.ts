import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Platform } from "@telegram-apps/sdk";
import { RootState } from "../store";

export interface LPState {
    botInline?: boolean;
    platform: Platform;
    showSettings?: boolean;
    startParam?: string;
    version: string;
}

const initialState: LPState = {
    platform:"base",
    version:"0.1",
}

export const lpSlice = createSlice({
    name:"lp",
    initialState,
    reducers:{
        setLP: (state, action:PayloadAction<LPState>) => {
            state.botInline = action.payload?.botInline;
            state.platform = action.payload?.platform
            state.showSettings = action.payload?.showSettings
            state.startParam = action.payload?.startParam
            state.version = action.payload?.version
        },
        setLPPlatform: (state, action:PayloadAction<string>) => {
            state.platform = action.payload
        }    
        }
})
export const {setLP, setLPPlatform} = lpSlice.actions

export const selectLP = (state: RootState) => state.lp

export default lpSlice.reducer
