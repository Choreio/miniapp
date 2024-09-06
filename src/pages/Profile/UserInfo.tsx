import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useAppSelector } from "@/store/hooks";
import { isUserEdited, setUserEdited } from "@/store/slices/changesStateSlice";
import { selectLocation } from "@/store/slices/locationSlice";
import { selectUser, UserState } from "@/store/slices/userSlice";
import { useMiniApp } from "@telegram-apps/sdk-react";
import {
  Avatar,
  Badge,
  Button,
  Caption,
  Cell,
  FileInput,
  Input,
  List,
  Section,
  Title,
} from "@telegram-apps/telegram-ui";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setUser as setUserStore } from "@/store/slices/userSlice";

import avatarPlaceholderBlack from "./avatar_placeholder_black.png";
import avatarPlaceholderWhite from "./avatar_placeholder_white.png";

const fields = [
  //Personal
  {
    sector: "personal",
    name: "photoUrl",
    displayName: "Avatar",
    editable: true,
  },
  {
    sector: "personal",
    name: "username",
    displayName: "Username",
    editable: true,
  },
  { sector: "personal", name: "email", displayName: "Email", editable: true },
  {
    sector: "personal",
    name: "firstName",
    displayName: "First name",
    editable: true,
  },
  {
    sector: "personal",
    name: "lastName",
    displayName: "Last name",
    editable: true,
  },
  //System
  { sector: "system", name: "id", displayName: "Inner ID", editable: false },
  {
    sector: "system",
    name: "tg_id",
    displayName: "Telegram ID",
    editable: false,
  },
  //Others
  {
    sector: "others",
    name: "languageCode",
    displayName: "Locale",
    editable: false,
  },
  { sector: "others", name: "role", displayName: "User Role", editable: false },
] as const;

const geolocationFields = [
  //Geolocation
  {
    sector: "geolocation",
    name: "available",
    displayName: "Geoposition enabled",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "latitude",
    displayName: "Latitude",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "longitude",
    displayName: "Longitude",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "formattedAdress",
    displayName: "FormattedAddress",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "country",
    displayName: "Country name",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "city",
    displayName: "City name",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "street",
    displayName: "Street name",
    editable: false,
  },
  {
    sector: "geolocation",
    name: "house",
    displayName: "House No",
    editable: false,
  },
] as const;

export const UserInfo: FC = () => {
  const dispatch = useDispatch();

  const miniApp = useMiniApp();
  const [editing, setEditing] = useState(useAppSelector(isUserEdited));
  const [hasChanges, setHasChanges] = useState(useAppSelector(isUserEdited));

  const userStore = useAppSelector(selectUser);
  const userEdited = JSON.parse(sessionStorage.getItem("saved-user") || "{}");
  const [user, setUser] = useState<UserState | undefined>(
    hasChanges ? userEdited : userStore
  );
  const geolocation = useAppSelector(selectLocation);
  const [geolocParsed, setGeolocParsed] = useState({
    available: geolocation.available,
    ...geolocation.latLong,
    ...geolocation.address,
  });
  useEffect(() => {
    setGeolocParsed({
      available: geolocation.available,
      ...geolocation.latLong,
      ...geolocation.address,
    });
  }, [geolocation]);

  const [editedFields, setEditedFields] = useState<string[]>([]);

  //Updating changes state
  useEffect(() => {
    dispatch(setUserEdited(hasChanges));
  }, [hasChanges, dispatch]);

  //Check if there are any changes after editing fields
  useEffect(() => {
    if (user)
      if (JSON.stringify(userStore) !== JSON.stringify(user)) {
        //Update saved edited user
        sessionStorage.setItem("saved-user", JSON.stringify(user));
        //Check what fields is changed
        setEditedFields(
          fields.map((field) => {
            if (user[field.name] !== userStore[field.name]) return field.name;
            else return "";
          })
        );
        setHasChanges(true);
      } else {
        setHasChanges(false);
        sessionStorage.removeItem("saved-user");
        setEditedFields([]);
      }
  }, [user, userStore]);

  //Update main user object after we dispatch our changes
  useEffect(() => {
    if (!hasChanges) {
      console.log("Sync user");
      setUser(userStore);
    }
  }, [userStore, hasChanges]);

  const [jiggle, setJiggle] = useState(false);
  //Toggle edit mode
  const handleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Edit mode handler");
    setEditing(true);
    if (hasChanges) setJiggle(true);
    if (editing && !hasChanges) {
      setEditing(false);
    }
  };
  //Hadling image input
  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      e.preventDefault();
      console.log("Avatar change");
      const files = e.currentTarget.files;
      if (files) {
        setUser({ ...user, photoUrl: URL.createObjectURL(files[0]) });
      }
    }
  };
  //Handle confirm button click
  const handleConfirmChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (user) {
      e.preventDefault();
      console.log("Changes saved");
      dispatch(setUserStore(user));
      setEditing(false);
      setHasChanges(false);
    }
  };
  //Handle cancel button click
  const handleCancelChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Changes canceled");
    setUser(userStore);
    setEditing(false);
    setHasChanges(false);
  };

  const [multiline, setMultiline] = useState(false);

  if (!user) {
    return <ErrorBoundary>Something went wrong with user</ErrorBoundary>;
  }
  return (
    <div className="md:container md:mx-auto">
      {hasChanges && (
        <div className="bg-yellow-400 text-center rounded-lg mb-1">
          You have uncommited changes!!!
        </div>
      )}
      <div className="p-2 flex align-middle items-center justify-between w-full">
        <Title>My profile</Title>
        <Button
          mode="plain"
          onClick={handleEditMode}
          className={jiggle ? "animate-jiggle text-red-400" : ""}
          onAnimationEnd={() => {
            setJiggle(false);
          }}
        >
          Edit
        </Button>
      </div>
      <List className="flex flex-col h-full gap-8">
        <Section header="Personal Info">
          {fields
            .filter((field) => field.sector === "personal")
            .map((field) => {
              return (
                <div key={field.name}>
                  <Caption
                    level="1"
                    weight="2"
                    className="p-6 text-[--tg-theme-hint-color]"
                  >
                    {field.displayName}
                  </Caption>
                  {field.name === "photoUrl" && (
                    <Cell
                      after={
                        field.editable &&
                        editing && (
                          <FileInput
                            id="input_file"
                            onChange={handleChangeAvatar}
                            accept="image/png, image/jpeg"
                          ></FileInput>
                        )
                      }
                    >
                      {editedFields.includes(field.name) && (
                        <Badge
                          type="number"
                          mode="critical"
                          large
                          className="absolute left-2 top-2 z-10"
                        >
                          Edited
                        </Badge>
                      )}
                      <Avatar
                        size={96}
                        src={
                          user.photoUrl
                            ? user.photoUrl
                            : miniApp.isDark
                            ? avatarPlaceholderWhite
                            : avatarPlaceholderBlack
                        }
                      ></Avatar>
                    </Cell>
                  )}
                  {field.name !== "photoUrl" && (
                    <>
                      {editing && field.editable ? (
                        <Input
                          readOnly={!(editing && field.editable)}
                          status={
                            editedFields.includes(field.name)
                              ? "error"
                              : "default"
                          }
                          inputMode="text"
                          placeholder={field.displayName}
                          value={user[field.name]}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            switch (field.name) {
                              case "username":
                                setUser({
                                  ...user,
                                  username: e.currentTarget.value,
                                });
                                break;
                              case "email":
                                setUser({
                                  ...user,
                                  email: e.currentTarget.value,
                                });
                                break;
                              case "firstName":
                                setUser({
                                  ...user,
                                  firstName: e.currentTarget.value,
                                });
                                break;
                              case "lastName":
                                setUser({
                                  ...user,
                                  lastName: e.currentTarget.value,
                                });
                                break;
                              default:
                                break;
                            }
                          }}
                        />
                      ) : (
                        <Cell
                          multiline={multiline}
                          onClick={() => setMultiline(!multiline)}
                        >
                          {user[field.name]}
                        </Cell>
                      )}
                    </>
                  )}
                </div>
              );
            })}
        </Section>
        <Section header="System Info">
          {fields
            .filter((field) => field.sector === "system")
            .map((field) => {
              return (
                <div key={field.name}>
                  <Caption
                    level="1"
                    weight="2"
                    className="pl-6 text-[--tg-theme-hint-color]"
                  >
                    {field.displayName}
                  </Caption>
                  <Cell
                    multiline={multiline}
                    onClick={() => setMultiline(!multiline)}
                  >
                    {user[field.name]}
                  </Cell>
                </div>
              );
            })}
        </Section>
        <Section header="Other Info">
          {fields
            .filter((field) => field.sector === "others")
            .map((field) => {
              return (
                <div key={field.name}>
                  <Caption
                    level="1"
                    weight="2"
                    className="p-6 text-[--tg-theme-hint-color]"
                  >
                    {field.displayName}
                  </Caption>
                  <Cell
                    multiline={multiline}
                    onClick={() => setMultiline(!multiline)}
                  >
                    {user[field.name]}
                  </Cell>
                </div>
              );
            })}
        </Section>
        <Section header="Geolocation Info">
          {geolocationFields.map((field) => {
            return (
              <div key={field.name}>
                <Caption
                  level="1"
                  weight="2"
                  className="p-6 text-[--tg-theme-hint-color]"
                >
                  {field.displayName}
                </Caption>
                <Cell
                  multiline={multiline}
                  onClick={() => setMultiline(!multiline)}
                >
                  {geolocParsed[field.name]?.toString()}
                </Cell>
              </div>
            );
          })}
        </Section>
      </List>
      {editing && (
        <div className="sticky bottom-12">
          <div className="flex flex-row justify-center items-center">
            <Button
              className="bg-green-400 w-full"
              onClick={handleConfirmChange}
            >
              Confirm
            </Button>
            <Button className="bg-red-400 w-full" onClick={handleCancelChange}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
