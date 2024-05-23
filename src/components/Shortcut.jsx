import React, { useState, useEffect } from "react";
import useApp from "../context/Context";

const Shortcut = () => {
  const { setIsForm, shortcuts, setShortcuts } = useApp();
  const [option, setOption] = useState(false);

  useEffect(() => {
    let savedShortcuts = localStorage.getItem("shortcuts");
    savedShortcuts && setShortcuts(JSON.parse(savedShortcuts));
  }, []);

  const handleDelete = (e, id) => {
    if (option === true) {
      e.preventDefault();
      let newShortcuts = shortcuts.filter((i) => {
        return i.id !== id;
      });
      setShortcuts(newShortcuts);
      localStorage.setItem("shortcuts", JSON.stringify(newShortcuts));
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setOption(true);
  };

  window.onclick = (e) => {
    setOption(false);
  };

  return (
    <>
      <section onContextMenu={handleContextMenu}
        className="shortcut-container h-200 grid w-4/5 grid-cols-4 overflow-hidden md:w-1/3 md:grid-cols-5" >
        {shortcuts.map((item) => {
          return (
            <div key={item.id} id={item.id}
              className={`shortcut ${option && "animate-wiggle"}`}
              onClick={(e) => {handleDelete(e, item.id)}} >
              <a href={item.url} className="flex-center flex-col p-2">
                <div className="shortcut-img">
                  <img src={item.icon} className="size-3/5" />
                </div>
                <div className="shortcut-name">{item.name}</div>
              </a>
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                className={`absolute -top-1 left-0 ${option ? "visible" : "invisible"}`} 
              />
            </div>
          );
        })}
        <div className="shortcut flex-center flex-col p-2" onClick={() => setIsForm(true)}>
          <div className="shortcut-img">
            <img src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className="size-2/5" />
          </div>
          <div className="shortcut-name">Add Shortcut</div>
        </div>
      </section>
    </>
  );
};

export default Shortcut;