import { Clock, Search, Shortcut, ShortcutForm, Name } from './components';
import useApp from './context/Context';

function App() {
  const { isForm, name } = useApp();
  return (
    <>
      <main className={`flex-center bg-black/30 relative size-full min-h-dvh py-9 ${!isForm || 'backdrop-blur-xl'}`}>
        {name ? (
          <div className="relative flex-col flex-center gap-5 py-8 size-full">
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
        ) : (
          <Name />
        )}
      </main>
    </>
  );
}

export default App;
