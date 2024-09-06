import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { GeoLocationStateType } from "./locationSlice";
import { deleteEditedTask } from "./changesStateSlice";

type SpecialsType = "new" | "hot" | "high price";
export type StatusType = "open" | "active" | "closed";
export type CurrencyType = "TON" | "USDT";

export type RewardType = {
  cost: number;
  currency: CurrencyType;
};
export type UserType = {
  id: string;
  name: string;
};
export interface TaskStateType {
  id: string;
  specials?: SpecialsType;
  status: StatusType;
  title: string;
  desc: string;
  reward: RewardType;
  customer: UserType;
  acceptedBy?: UserType;
  attachments?: string[];
  location: GeoLocationStateType;
}

const initialState: TaskStateType[] = [
  {
    id: "1",
    specials: "hot",
    status: "open",
    title: "Get out trash",
    desc: "There will be 2 bags of garbage",
    reward: { cost: 20000, currency: "TON" },
    attachments: [
      "https://loremflickr.com/890/420",
      "https://loremflickr.com/1920/1080",
    ],
    customer: { id: "101023", name: "Your mom" },
    location: {
      available: true,
      latLong: { latitude: 55.80738, longitude: 37.463763 },
      address: {
        formattedAdress: "Россия, Москва, улица Академика Бочвара, 3к1",
        country: "Россия",
        city: "Москва",
        street: "улица Академика Бочвара",
        house: "3к1",
      },
    },
  },
  {
    id: "3",
    specials: "new",
    status: "open",
    title: "Deliver package",
    desc: "There will be little box about 1kg",
    reward: { cost: 26000, currency: "TON" },
    attachments: ["https://loremflickr.com/1080/720"],
    customer: { id: "1923719", name: "Steven Johnes" },
    location: {
      available: true,
      latLong: {
        latitude: 55.774472,
        longitude: 37.581613,
      },
      address: {
        formattedAdress: "Россия, Москва, улица Грузинский Вал, 26с1",
        country: "Россия",
        city: "Москва",
        street: "улица Грузинский Вал",
        house: "26с1",
      },
    },
  },
  {
    id: "2",
    specials: "high price",
    status: "open",
    title: "Get an order from shop and deliver to me",
    desc: "There will be big shelf",
    reward: { cost: 2000000, currency: "TON" },
    attachments: [
      "https://loremflickr.com/1080/920",
      "https://loremflickr.com/890/420",
      "https://loremflickr.com/1920/1080",
    ],
    customer: { id: "928374928374", name: "Willy Hoghs" },
    location: {
      available: true,
      latLong: {
        latitude: 55.79346,
        longitude: 37.621633,
      },
      address: {
        formattedAdress: "Россия, Москва, улица Сущёвский Вал, 65к1",
        country: "Россия",
        city: "Москва",
        street: "улица Сущёвский Вал",
        house: "65к1",
      },
    },
  },
  {
    id: "5",
    specials: "high price",
    status: "open",
    title: "Get an order from shop and deliver to me",
    desc: "There will be big shelf",
    reward: { cost: 2000000, currency: "TON" },
    attachments: [
      "https://loremflickr.com/1080/720",
      "https://loremflickr.com/100/200",
      "https://loremflickr.com/1080/920",
      "https://loremflickr.com/890/420",
      "https://loremflickr.com/1920/1080",
    ],
    customer: { id: "99281932", name: "Myself tipa" },
    location: {
      available: true,
      latLong: {
        latitude: 55.75094,
        longitude: 37.617078,
      },
      address: {
        formattedAdress: "Россия, Москва, Кремлёвская набережная, 1с12",
        country: "Россия",
        city: "Москва",
        street: "Кремлёвская набережная, 1с12",
        house: "1с12",
      },
    },
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskStateType>) => {
      const newTask = {
        id: action.payload.id,
        specials: action.payload.specials,
        status: action.payload.status,
        title: action.payload.title,
        desc: action.payload.desc,
        reward: action.payload.reward,
        attachments: action.payload.attachments,
        customer: action.payload.customer,
        location: action.payload.location,
      };
      state.push(newTask);
    },
    setTask: (state, action: PayloadAction<TaskStateType>) => {
      const editedTask = action.payload;
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = editedTask;
      deleteEditedTask(editedTask.id);
    },
    setStatus: (
      state,
      action: PayloadAction<{ id: string; status: StatusType; user: UserType }>
    ) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
        task.acceptedBy = action.payload.user;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTask, setTask, setStatus, deleteTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export const countActiveTasks = (state: RootState, userId: string) =>
  state.tasks.filter(
    (task) => task.acceptedBy?.id === userId && task.status === "active"
  ).length;

export const selectTaskByID = (state: RootState, taskId: string) =>
  state.tasks.find((task) => task.id === taskId);

export default tasksSlice.reducer;
