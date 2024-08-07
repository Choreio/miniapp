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
    <div className="p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0">
      <MapContainer
        className="w-full h-[--tg-viewport-width] overflow-hidden z-0"
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
