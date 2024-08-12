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
    location:string[]|number[];
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
    customer:"Your mom",
    location:[55.780660, 37.616068]
    },
    {
    id:"12s31sdfsfs231led9hkald",
    specials:"new",
    status:"open",
    title:"Deliver package",
    desc:"There will be little box about 1kg",
    reward:"26000 RP",
    attachments:["somephoto1", "somephoto2"],
    customer:"Steven Johnes",
    location:[55.773790, 37.629883]
    },
    {
    id:"23e9fh23409fasljadhfsk",
    specials:"high price",
    status:"open",
    title:"Get an order from shop and deliver to me",
    desc:"There will be big shelf",
    reward:"2000000 RP",
    attachments:["some photo1", "somphoto2"],
    customer:"Willy Hoghs",
    location:[55.791939, 37.620963]
    },
    {
        id:"23e9fh23409fasskdjfksdjljadhfsk",
        specials:"high price",
        status:"open",
        title:"Get an order from shop and deliver to me",
        desc:"There will be big shelf",
        reward:"2000000 RP",
        attachments:["some photo1", "somphoto2"],
        customer:"99281932",
        location:[55.794303, 37.618574]
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
                customer:action.payload.customer,
                location:action.payload.location
                }
            state.push(newTask)    
        },
        editTask: (state, action:PayloadAction<TaskState>) => {
            const editedTask = action.payload;
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index]=editedTask;
        },
        setStatus: (state, action: PayloadAction<{id:string,status:StatusType, userId: string}>) => {
            const task = state.find(task => task.id === action.payload.id);
            if(task){
                task.status=action.payload.status;
                task.acceptedBy=action.payload.userId;
            }

        }
    }
})
export const {addTask, editTask, setStatus} = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks

export const selectOpenTasks = (state: RootState, userId:string) => state.tasks.filter(task => task.acceptedBy !== userId && task.status==="open") 
export const selectTakenTasks = (state: RootState, userId:string) => state.tasks.filter(task => task.acceptedBy === userId && task.status === "active") 
export const selectCreatedTasks = (state: RootState, userId:string) => state.tasks.filter(task => task.customer === userId) 

export const selectTaskByID = (state: RootState, taskId:string) => state.tasks.find(task => task.id === taskId)

export default tasksSlice.reducer

