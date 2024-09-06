import { fetchGeocoder, fetchGeosuggest } from "@/methods/yandexApis";
import { useAppSelector } from "@/store/hooks";
import {
  GeoLocationStateType,
  selectLocation,
} from "@/store/slices/locationSlice";
import { selectUser } from "@/store/slices/userSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Caption,
  Cell,
  IconButton,
  Input,
  List,
} from "@telegram-apps/telegram-ui";
import {
  ChangeEvent,
  createRef,
  FC,
  MouseEvent,
  TouchEvent,
  useEffect,
  useState,
} from "react";
type GeoguesserInputType = {
  geoposition: GeoLocationStateType;
  setGeoposition: (geoposition: GeoLocationStateType) => void;
  status?: "default" | "error" | "focused";
};

let typingTimer: NodeJS.Timeout;

export const GeoguesserInput: FC<GeoguesserInputType> = ({
  geoposition,
  setGeoposition,
  status,
}) => {
  const userGeolocation = useAppSelector(selectLocation);
  const user = useAppSelector(selectUser);

  const addressInputRef = createRef<HTMLElement>();
  const [addressInput, setAddressInput] = useState<string>("");
  const [suggestedAddresses, setSuggestedAdresses] = useState<
    {
      title: string;
      subtitle: string;
      uri: string;
    }[]
  >([]);

  //Tooltip handlers
  const [addressChosen, setAdressChosen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const showTooltip = () => {
    setTooltipVisible(true);
  };
  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  useEffect(() => {
    clearTimeout(typingTimer);
    if (addressInput.length > 0 && !addressChosen) {
      typingTimer = setTimeout(() => {
        fetchGeosuggest(user.languageCode || "en", addressInput).then(
          (suggestions) => {
            console.log(suggestions);
            setSuggestedAdresses(suggestions);
          }
        );
        showTooltip();
      }, 500);
    } else {
      setSuggestedAdresses([]);
      hideTooltip();
    }
  }, [addressInput, addressChosen, user]);

  const handleGeopositionInput = (e: ChangeEvent<HTMLInputElement>) => {
    const address = e.currentTarget.value;
    setAdressChosen(false);
    setAddressInput(address);
    setSuggestedAdresses([]);
    hideTooltip();
  };

  useEffect(() => {
    hideTooltip();
    setSuggestedAdresses([]);
  }, [geoposition]);

  const handleSuggestedAddress = (address: string, uri?: string) => {
    console.log("Selected address");
    setAddressInput(address);
    setAdressChosen(true);
    fetchGeocoder(user.languageCode || "en", addressInput, uri).then(
      (codedLocation) => {
        console.log(codedLocation);
        setGeoposition(codedLocation[0]);
      }
    );
    hideTooltip();
  };

  const clearAddressInput = () => {
    setAddressInput("");
    setSuggestedAdresses([]);
    hideTooltip();
  };

  return (
    <div
      className="relative overflow-visible self-stretch"
      ref={addressInputRef as React.RefObject<HTMLDivElement>}
    >
      <Input
        after={
          addressInput.length > 0 && (
            <IconButton onClick={clearAddressInput}>
              <XMarkIcon className="w-4 h-4" />
            </IconButton>
          )
        }
        value={addressInput}
        status={status}
        placeholder="Address..."
        onChange={handleGeopositionInput}
        //onBlur={hideTooltip}
        onFocus={() => {
          if (suggestedAddresses.length > 0) showTooltip();
        }}
      ></Input>
      {userGeolocation.available && (
        <Caption
          className="pl-8 text-[--tg-theme-link-color]"
          onClick={() => {
            setGeoposition(userGeolocation);
            setAddressInput(userGeolocation?.address?.formattedAdress || "");
            setAdressChosen(true);
          }}
        >
          My address
        </Caption>
      )}
      {tooltipVisible && (
        <div className="top-22 absolute z-20 -mt-2 w-full">
          <List className="mr-8 ml-8 rounded-xl border border-solid border-gray-600 bg-[--tg-theme-secondary-bg-color]">
            {suggestedAddresses.length > 0 &&
              suggestedAddresses.map((address) => {
                return (
                  <div
                    key={address.uri}
                    onTouchEnd={(e: TouchEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      handleSuggestedAddress(address.title, address.uri);
                    }}
                  >
                    <Cell
                      Component={"div"}
                      className="w-full"
                      subtitle={address.subtitle}
                      onClick={(e: MouseEvent<HTMLDivElement>) => {
                        e.preventDefault();
                        handleSuggestedAddress(address.title, address.uri);
                      }}
                    >
                      {address.title}
                    </Cell>
                  </div>
                );
              })}
            {suggestedAddresses.length === 0 && (
              <Cell className="w-full">Not found</Cell>
            )}
          </List>
        </div>
      )}
    </div>
  );
};
