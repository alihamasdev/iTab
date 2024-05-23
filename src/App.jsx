import { Clock, Search, Shortcut, ShortcutForm } from "./components";
import useApp from "./context/Context";

function App() {
  const { isForm } = useApp();
  return (
    <>
      <main className={`${!isForm || "backdrop-blur-xl"} main-section`}>
        <div className="flex-center relative size-full flex-col gap-5 py-8">
          {!isForm ? (
            <>
              <Clock />
              <Search />
              <Shortcut />
            </>
          ) : (
            <ShortcutForm />
          )}
        </div>
      </main>
    </>
  );
}

export default App;