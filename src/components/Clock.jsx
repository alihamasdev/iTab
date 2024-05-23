import { useEffect, useState } from "react";
import useApp from "../context/Context";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  const { name, clockFormat } = useApp();

  if(clockFormat === 12){
    hours = hours % 12;
    hours = hours ? hours : 12;
  }


  let dayTime = null;

  if (time.getHours() >= 4 && time.getHours() < 12) {
    dayTime = "Good Morning";
  } else if (time.getHours() >= 12 && time.getHours() < 17) {
    dayTime = "Good After Noon";
  } else if (time.getHours() >= 17 && time.getHours() < 21) {
    dayTime = "Good Evening";
  } else {
    dayTime = "Good Night";
  }

  return (
    <>
      <section className="flex h-auto items-end overflow-hidden">
        <div className="text-[80px] font-medium leading-none md:text-[150px]">
          {hours ? hours : 12}:{minutes > 9 ? minutes : `0${minutes}`}
          {clockFormat === 12 && (
            <span className="text-[30px] leading-none md:text-[50px]">
              {time.getHours() >= 12 ? 'PM' : 'AM'}
            </span>
          )}
        </div>
      </section>

      <section className="msg-container h-auto max-w-4.5/5 overflow-hidden">
        <div className="text-center text-[23px] font-medium md:text-[40px]">
          {dayTime}, {name}
        </div>
      </section>
    </>
  );
};

export default Clock;
