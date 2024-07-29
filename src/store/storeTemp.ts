import { TaskInfo, UserInfo, UserPreference } from "@/types"


export const userPref:UserPreference = {
    wallet:"",
    searchRadius:1000
}
export const userInfo:UserInfo = {
    username:"",
    firstname:"",
    lastname:""
}

export const tasks:TaskInfo[] = [
    {
        id:1,
        name:"Вынести мусор",
        description:"Мусор лежит возле двери",
        price:1000,
        currency:"RUB",
        location:{
            latitude:65,
            longitude:45
        }
    },
    {
        id:2,
        name:"Убрать комнату",
        description:"Комната 12 кв",
        price:25,
        currency:"USD",
        location:{
            latitude:63,
            longitude:43
        }
    },
    {
        id:3,
        name:"Доставить посылку",
        description:"Небольшая посылка в изоленте",
        price:0.0001,
        currency:"BTC",
        location:{
            latitude:64,
            longitude:44
        }
    },
    {
        id:4,
        name:"Вынести шкаф на помойку",
        description:"Небольшой двухметровый шкаф, лифта в доме нет",
        price:5000,
        currency:"RUB",
        location:{
            latitude:65.1,
            longitude:45.1
        }
    }
]