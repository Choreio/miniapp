import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type latLongType = {
  latitude: string | number;
  longitude: string | number;
};
export type AddressType = {
  formattedAdress: string;
  country: string;
  city: string;
  street: string;
  house: string;
};
export type GeoLocationStateType = {
  available: boolean;
  latLong?: latLongType;
  address?: AddressType;
};

const initialState: GeoLocationStateType = {
  available: false,
};

const fetchLocation = async (address: string) => {
  const loc = await fetch(
    "https://geocode-maps.yandex.ru/1.x" +
      +"?apikey=7ea07d84-43cf-44b9-8850-4bac0cea663f" +
      "&geocode=" +
      address +
      "&lang=en"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
  return loc;
};

const fetchAddress = async (location: string) => {
  await fetch(
    "https://geocode-maps.yandex.ru/1.x" +
      +"?apikey=7ea07d84-43cf-44b9-8850-4bac0cea663f" +
      "&geocode=" +
      location +
      "&lang=en"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export const geolocationSlice = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    setGeolocation: (state, action: PayloadAction<GeoLocationStateType>) => {
      let latLong = action.payload?.latLong;
      let address = action.payload?.address;
      if (!location && address) {
        fetchLocation(address.formattedAdress);
        latLong = undefined;
      }
      if (latLong && !address) {
        fetchAddress(latLong.longitude + ", " + latLong.longitude);
        address = undefined;
      }
      state.available = action.payload.available;
      state.latLong = latLong;
      state.address = address;
    },
  },
});
export const { setGeolocation } = geolocationSlice.actions;

export const selectLocation = (state: RootState) => state.geolocation;

export default geolocationSlice.reducer;
