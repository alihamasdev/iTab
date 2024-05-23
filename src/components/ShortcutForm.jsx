import { useForm } from "react-hook-form";
import useApp from "../context/Context";

const ShortcutForm = () => {
  const {setIsForm, shortcuts, setShortcuts} = useApp();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const onSubmit = (data) => {
    let favicon = `http://www.google.com/s2/favicons?sz=128&domain=${data.url}`;
    let newShortcut = {id: Date.now(),name: data.name, url: data.url, icon: favicon};
    localStorage.setItem("shortcuts", JSON.stringify([...shortcuts, newShortcut]));
    setShortcuts([...shortcuts, newShortcut]);
    setIsForm(false);
    };

  return (
    <>
      <div className="absolute-center glassmorphism z-10 w-4/5 md:w-400 rounded-xl px-5 py-5 md:px-10 shadow-lg">
        <div className="relative">
          <h1 className="mb-4 text-center text-[22px] font-bold">Add Shortcut</h1>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="relative mt-2.5 w-full">
              <label htmlFor="name-field" className="mb-0.5 inline text-sm font-medium">Name</label>
              <input type="text" id="name-field" className={`input-field ${errors.name && "border-red-500"}`}
                {...register("name", {
                  required: { value: true, message: "Name is required" }
                })}
              />
              {errors.name && <span className="error-msg">{errors.name.message}</span>}
            </div>
            <div className="relative mt-2 w-full">
              <label htmlFor="url-field" className="mb-0.5 inline text-sm font-medium">Url</label>
              <input type="text" id="url-field" className={`input-field ${errors.url && "border-red-500"}`}
                {...register("url", {
                  required: { value: true, message: "Url is required" },
                  pattern: { value: RegExp, message: "format: https://www.example.com" }
                })}
              />
              {errors.url && <span className="error-msg">{errors.url.message}</span> }
            </div>
            <div className="mt-4 flex-center gap-3">
              <button onClick={()=> {setIsForm(false)}}
               type="reset" className="btn min-w-100 bg-transparent hover:border-accent hover:bg-accent">
                Cancel
              </button>
              <button type="submit" className="btn min-w-100 border-accent">Done</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShortcutForm;
