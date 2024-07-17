export function Footer() {
  //const initData = useInitData();
  //const wallet = useTonWallet();

  return (
    <footer className="absolute inset-x-0 bottom-0 z-49">
      <nav
        aria-label="Global"
        className="inline-flex justify-between w-full h-16 gap-px items-end"
      >
        <button className="w-32 h-16 inline text-center align-middle border-t bg-slate-500">
          Menu1
        </button>
        <button className="w-32 h-16 inline text-center align-middle border-t bg-slate-500">
          Menu2
        </button>
        <button className="w-32 h-28 rounded-t-full inline text-center align-middle bg-slate-500 border">
          Menu3 Rounded
        </button>
        <button className="w-32 h-16 inline text-center align-middle border-t bg-slate-500">
          Menu4
        </button>
        <button className="w-32 h-16 inline text-center align-middle border-t bg-slate-500">
          Menu5
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
