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
                <a
                  href="/extension.zip"
                  target="_blank"
                  className="fixed bottom-10 right-10 glassmorphism rounded-full px-4 py-2 text-base font-medium cursor-pointer transition-transform hover:scale-110">
                  Download Extension
                </a>
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
