import {
  Button,
  Caption,
  Cell,
  List,
  Placeholder,
  Section,
  Snackbar,
  Spinner,
  Title,
} from "@telegram-apps/telegram-ui";
import {
  useTonAddress,
  useTonConnectUI,
  WalletsModalState,
} from "@tonconnect/ui-react";
import { FC, useState } from "react";
import wallet404 from "./wallet404.gif";
import { ClipboardIcon } from "@heroicons/react/24/outline";

export const WalletInfo: FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const walletAddress = useTonAddress(true);

  const [showSnackbar, setShowSnackbar] = useState(false);

  const [connecting, setConnecting] = useState(false);

  function changeConnecting(state: WalletsModalState) {
    setConnecting(state.status === "opened" ? true : false);
  }
  let modalStateChangeUnsubscribe =
    tonConnectUI.onModalStateChange(changeConnecting);
  if (walletAddress) {
    modalStateChangeUnsubscribe();
  }
  async function connectWallet() {
    setConnecting(true);
    modalStateChangeUnsubscribe =
      tonConnectUI.onModalStateChange(changeConnecting);
    await tonConnectUI.openModal();
  }

  if (!walletAddress) {
    return (
      <Placeholder className="h-full">
        <img
          alt="Wallet 404"
          src={wallet404}
          style={{ display: "block", width: "288px", height: "288px" }}
        />
        <Title>Wallet is not connected</Title>
        <Button mode="filled" onClick={connectWallet}>
          {!connecting ? <>Connect wallet</> : <Spinner size="s" />}
        </Button>
        <Button mode="plain" onClick={() => history.back()}>
          Back
        </Button>
      </Placeholder>
    );
  }
  return (
    <div className="md:container md:mx-auto h-full">
      <div className="p-2 flex align-middle items-center justify-between w-full">
        <Title>Wallet details</Title>
        <Button mode="plain" onClick={() => history.back()}>
          Back
        </Button>
      </div>
      <List className="flex flex-col h-full gap-8">
        <Section header="Common information">
          <div>
            <Caption
              level="1"
              weight="2"
              className="p-6 text-[--tg-theme-hint-color]"
            >
              Wallet address
            </Caption>
            <Cell
              after={
                <ClipboardIcon
                  className="w-6 h-6"
                  onClick={() => {
                    navigator.clipboard.writeText(walletAddress);
                    setShowSnackbar(true);
                  }}
                ></ClipboardIcon>
              }
            >
              {walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4)}
            </Cell>
          </div>
        </Section>
      </List>
      <Snackbar
        className="z-50"
        hidden={!showSnackbar}
        duration={100000}
        onClose={() => setShowSnackbar(false)}
      >
        Wallet address copied to clipboard
      </Snackbar>
    </div>
  );
};
