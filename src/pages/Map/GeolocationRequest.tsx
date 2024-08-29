import { Button, List, Text, Title } from "@telegram-apps/telegram-ui";
import { FC, useState } from "react";
import { GeoguesserInput } from "./GeoguesserInput";
import {
  GeoLocationStateType,
  setGeolocation,
} from "@/store/slices/locationSlice";
import { useDispatch } from "react-redux";
import { MapContainerYandex } from "./MapContainerYandex";

export const GeolocationRequest: FC = () => {
  const dispatch = useDispatch();
  const [manualGeoposition, setManualGeoposition] =
    useState<GeoLocationStateType>({
      available: false,
      latLong: {
        latitude: "",
        longitude: "",
      },
      address: {
        formattedAdress: "",
        country: "",
        city: "",
        street: "",
        house: "",
      },
    });

  const confirmGeolocation = () => {
    dispatch(setGeolocation(manualGeoposition));
  };
  return (
    <List className="overflow-visible bg-[--tg-theme-bg-color] mt-4">
      <div className="flex flex-col gap-4 p-4 text-center">
        <Title>To provide accurate information we need your geolocation.</Title>
        <Text>
          We cannot automatically determine your location, so please let us know
          where you are
        </Text>
      </div>
      <GeoguesserInput
        geoposition={manualGeoposition}
        setGeoposition={setManualGeoposition}
      />
      {manualGeoposition.available && (
        <div className="flex flex-col gap-4">
          <Title>Chosen geolocation</Title>
          <span>Address: {manualGeoposition.address?.formattedAdress}</span>
          <span>
            Latitude, Longitude:{" "}
            {manualGeoposition.latLong?.latitude +
              ", " +
              manualGeoposition.latLong?.longitude}
          </span>
          <MapContainerYandex
            available={manualGeoposition.available}
            type="self"
            className="p-2 w-full h-64 self-center"
            center={{
              latitude: Number(manualGeoposition.latLong?.latitude),
              longitude: Number(manualGeoposition.latLong?.longitude),
            }}
          />
          <Button onClick={confirmGeolocation}>Confirm</Button>
        </div>
      )}
    </List>
  );
};
