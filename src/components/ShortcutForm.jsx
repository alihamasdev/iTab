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
      <div className="z-10 absolute-center shadow-lg px-5 md:px-10 py-5 rounded-xl w-4/5 md:w-[400px] glassmorphism">
        <div className="relative">
          <h1 className="mb-4 font-bold text-[22px] text-center">Add Shortcut</h1>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="relative mt-2.5 w-full">
              <label htmlFor="name-field" className="inline mb-0.5 font-medium text-sm">Name</label>
              <input type="text" id="name-field" className={`input-field ${errors.name && "border-red-500"}`}
                {...register("name", {
                  required: { value: true, message: "Name is required" }
                })}
              />
              {errors.name && <span className="error-msg">{errors.name.message}</span>}
            </div>
            <div className="relative mt-2 w-full">
              <label htmlFor="url-field" className="inline mb-0.5 font-medium text-sm">Url</label>
              <input type="text" id="url-field" className={`input-field ${errors.url && "border-red-500"}`}
                {...register("url", {
                  required: { value: true, message: "Url is required" },
                  pattern: { value: RegExp, message: "format: https://www.example.com" }
                })}
              />
              {errors.url && <span className="error-msg">{errors.url.message}</span> }
            </div>
            <div className="flex-center gap-3 mt-4">
              <button onClick={()=> {setIsForm(false)}}
               type="reset" className="hover:border-accent bg-transparent hover:bg-accent min-w-100 btn">
                Cancel
              </button>
              <button type="submit" className="border-accent min-w-100 btn">Done</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShortcutForm;
