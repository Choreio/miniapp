import {
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function Footer() {
  //const initData = useInitData();
  //const wallet = useTonWallet();

  const navigate = useNavigate();
  return (
    <footer className="absolute bottom-0 inset-x-0 z-49">
      <nav
        aria-label="Global"
        className="inline-flex justify-between items-end w-full h-16 gap-px"
      >
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="w-1/5 h-full inline-flex items-center justify-center border-t bg-slate-500 p-2"
        >
          <UserIcon className="h-2/3" />
        </button>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="w-1/5 h-full inline-flex items-center justify-center border-t bg-slate-500 p-2"
        >
          <HomeIcon className="h-2/3" />
        </button>
        <button
          onClick={() => {
            navigate("/map");
          }}
          className="w-1/5 h-full inline-flex items-center justify-center border-t bg-slate-500 p-2"
        >
          <MapIcon className="h-2/3" />
        </button>
        <button
          onClick={() => {
            navigate("/tasks");
          }}
          className="w-1/5 h-full inline-flex items-center justify-center border-t bg-slate-500 p-2"
        >
          <BriefcaseIcon className="h-2/3" />
        </button>
        <button
          onClick={() => {
            navigate("/chat");
          }}
          className="w-1/5 h-full inline-flex items-center justify-center border-t bg-slate-500 p-2"
        >
          <ChatBubbleBottomCenterTextIcon className="h-2/3" />
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
