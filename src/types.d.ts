type UserPreference = {
    wallet: string;
    searchRadius: number;
}

type UserInfo = {
    username: string;
    firstname: string;
    lastname:string;
}

type LocationInfo = {
    latitude: number;
    longitude: number;
}

export type TaskInfo = {
    id:number;
    name: string;
    description: string|null;
    price: number;
    currency: string;
    location: LocationInfo|null;
}