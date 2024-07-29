import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface UserState {
    
    id: string;
    username?: string;
    firstName: string;
    lastName?: string;
    languageCode?: string;
    photoUrl?: string;
}

const initialState: UserState = {
    id:"undefined",
    username:"johndoe1990",
    firstName:"John",
    lastName:"Doe"
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<UserState>) => {
            state.id = action.payload.id
            state.username = action.payload?.username
            state.firstName = action.payload.firstName
            state.lastName = action.payload?.lastName
            state.languageCode = action.payload?.languageCode
            state.photoUrl = action.payload?.photoUrl
        },
        setField: (state, action:PayloadAction<{field:string, value:string}>) => {
            var field = action.payload.field;
            switch(field.toLowerCase()){
                case "id":{
                    state.id = action.payload.value
                    break;
                }
                case "username":{
                    state.username = action.payload.value
                    break;
                }
                case "firstname":{
                    state.firstName = action.payload.value
                    break;
                }
                case "lastname":{
                    state.lastName = action.payload.value
                    break;
                }
                case "languagecode":{
                    state.languageCode = action.payload.value
                    break;
                }
                default:{
                    break;
                }
            }
            
        }
    }
})
export const {setUser, setField} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer

