import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type SpecialsType = "new"|"hot"|"high price";
type StatusType = "open"|"active"|"closed";
export interface TaskState {
    
    id: string;
    specials?:SpecialsType;
    status:StatusType;
    title: string;
    desc: string;
    reward: string;
    customer: string;
    acceptedBy?: string;
    attachments?: string[];
}

const initialState: TaskState[] = [
    {
    id:"12s31sdfsa23hkald",
    specials:"hot",
    status:"open",
    title:"Get out trash",
    desc:"There will be 2 bags of garbage",
    reward:"20000 RP",
    attachments:["some photo1", "some photo2"],
    customer:"Your mom"
    },
    {
    id:"12s31sdfsfs231led9hkald",
    specials:"new",
    status:"open",
    title:"Deliver package",
    desc:"There will be little box about 1kg",
    reward:"26000 RP",
    attachments:["somephoto1", "somephoto2"],
    customer:"Steven Johnes"
    },
    {
    id:"23e9fh23409fasljadhfsk",
    specials:"high price",
    status:"open",
    title:"Get an order from shop and deliver to me",
    desc:"There will be big shelf",
    reward:"2000000 RP",
    attachments:["some photo1", "somphoto2"],
    customer:"Willy Hoghs"
    },
    {
        id:"23e9fh23409fasljadhfsk",
        specials:"high price",
        status:"open",
        title:"Get an order from shop and deliver to me",
        desc:"There will be big shelf",
        reward:"2000000 RP",
        attachments:["some photo1", "somphoto2"],
        customer:"99281932"
    }
]

export const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask: (state, action:PayloadAction<TaskState>) => {
            const newTask = {
                id:action.payload.id,
                specials:action.payload.specials,
                status:action.payload.status,
                title:action.payload.title,
                desc:action.payload.desc,
                reward:action.payload.reward,
                attachments:action.payload.attachments,
                customer:action.payload.customer
                }
            state.push(newTask)    
        },
        editTask: (state, action:PayloadAction<TaskState>) => {
            const editedTask = action.payload;
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index]=editedTask;
        },
        setStatus: (state, action: PayloadAction<{id:string,status:StatusType}>) => {
            const task = state.find(task => task.id === action.payload.id);
            if(task)
                task.status=action.payload.status;
        }
    }
})
export const {addTask, editTask} = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks

export const selectTask = (id:string, state: RootState) => {state.tasks.find(task => task.id = id)}

export default tasksSlice.reducer

