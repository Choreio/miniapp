import { LatLng } from "leaflet";
import { FC, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

type MapProps = {
  latitude: number;
  longitude: number;
  radius: number;
};

function LocationMarker() {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export const MapContainerLeafets: FC<MapProps> = ({ latitude, longitude }) => {
  return (
    <div className="flex w-full h-96">
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
          alignSelf: "center",
        }}
        center={[latitude, longitude]}
        zoom={13}
        zoomControl={false}
      >
        {/* add google map tile url  */}
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};
