import React, { ChangeEvent, useEffect, useState, type FC } from "react";
import { useInitData, useMiniApp } from "@telegram-apps/sdk-react";

import {
  Avatar,
  Button,
  Cell,
  FileInput,
  Input,
  Placeholder,
  Section,
} from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectUser, setUser, UserState } from "@/store/slices/userSlice";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

import avatarPlaceholderBlack from "./avatar_placeholder_black.png";
import avatarPlaceholderWhite from "./avatar_placeholder_white.png";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

export const Profile: FC = () => {
  const miniApp = useMiniApp();
  const initData = useInitData();

  const dispatch = useDispatch();
  const userStore = useAppSelector(selectUser);

  const [userEdited, setUserEdited] = useState({
    ...(userStore as UserState),
  });

  useEffect(() => {
    setUserEdited({
      ...(userStore as UserState),
    });
    console.log("Sync user");
  }, [userStore]);

  useEffect(() => {
    if (JSON.stringify(userStore) !== JSON.stringify(userEdited))
      setHasChanges(true);
    else setHasChanges(false);
  }, [userEdited]);

  const [editing, setEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleEditMode = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    console.log("Edit mode handler");
    setEditing(true);
    if (editing && !hasChanges) {
      setEditing(false);
    }
  };
  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("Avatar change");
    const files = e.currentTarget.files;
    if (files) {
      userEdited.photoUrl = URL.createObjectURL(files[0]);
    }
  };

  const handleConfirmChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Changes saved");
    dispatch(setUser(userEdited));
    setEditing(false);
  };
  const handleCancelChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Changes canceled");
    setUserEdited({
      ...(userStore as UserState),
    });
    setEditing(false);
  };

  if (!initData) {
    return (
      <Placeholder
        header="Oops"
        description="Application was launched with missing init data"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    );
  }

  return (
    <div className="md:container md:mx-auto">
      <Section
        className="flex flex-col h-full pt-4 gap-2"
        header={
          <SectionHeader large={true}>
            <span className="flex gap-2">
              <div>Your profile</div>
              <PencilSquareIcon
                className="w-6 hover:opacity-90"
                onClick={handleEditMode}
              ></PencilSquareIcon>
            </span>
          </SectionHeader>
        }
        footer={
          editing && (
            <>
              <Button className="bg-green-400" onClick={handleConfirmChange}>
                Confirm
              </Button>
              <Button className="bg-red-400" onClick={handleCancelChange}>
                Cancel
              </Button>
            </>
          )
        }
      >
        {hasChanges && <div>You have uncommited changes!!!</div>}
        <div>
          <SectionHeader>Avatar</SectionHeader>
          <Cell
            after={
              editing && (
                <FileInput
                  id="input_file"
                  onChange={handleChangeAvatar}
                  accept="image/png, image/jpeg"
                ></FileInput>
              )
            }
          >
            <Avatar
              size={96}
              src={
                userEdited.photoUrl && userEdited.photoUrl.length > 0
                  ? userEdited.photoUrl
                  : miniApp.isDark
                  ? avatarPlaceholderWhite
                  : avatarPlaceholderBlack
              }
            ></Avatar>
          </Cell>
        </div>
        <div>
          <SectionHeader>User id</SectionHeader>
          <Cell>{userEdited.id}</Cell>
        </div>
        <div>
          <SectionHeader>Username</SectionHeader>
          {editing ? (
            <Input
              className="w-full m-auto"
              placeholder="Username"
              value={userEdited.username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUserEdited({
                  ...userEdited,
                  username: e.currentTarget.value,
                });
              }}
            ></Input>
          ) : (
            <Cell>
              <span>{userEdited?.username}</span>
            </Cell>
          )}
        </div>
        <div>
          <SectionHeader>Full name</SectionHeader>
          {editing ? (
            <Input
              className="w-full m-auto"
              placeholder="Full name"
              value={userEdited.fullname}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUserEdited({
                  ...userEdited,
                  fullname: e.currentTarget.value,
                  firstName: e.currentTarget.value.split(" ")[0],
                  lastName: e.currentTarget.value.split(" ")[1],
                });
              }}
            ></Input>
          ) : (
            <Cell>{userEdited.fullname}</Cell>
          )}
        </div>
        <div>
          <SectionHeader>Locale</SectionHeader>
          <Cell>{userEdited?.languageCode}</Cell>
        </div>
      </Section>
    </div>
  );
};
