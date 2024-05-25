import { useEffect, useState } from 'react';
import useApp from '../context/Context';
import dateFormat, { masks } from 'dateformat';

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  masks.zone = 'TT';
  masks.hours12 = 'h:MM';
  masks.hours24 = 'H:MM';
  const { name, clockFormat } = useApp();
  const [time, setTime] = useState(new Date());

  let dayTime = null;

  if (time.getHours() >= 4 && time.getHours() < 12) {
    dayTime = 'Good Morning';
  } else if (time.getHours() >= 12 && time.getHours() < 17) {
    dayTime = 'Good After Noon';
  } else if (time.getHours() >= 17 && time.getHours() < 21) {
    dayTime = 'Good Evening';
  } else {
    dayTime = 'Good Night';
  }

  return (
    <>
      <section className="flex items-end h-auto overflow-hidden">
        <div className="font-medium text-[80px] md:text-[150px] leading-none">
          {clockFormat === 12 ? dateFormat(time, 'hours12') : dateFormat(time, 'hours24')}
          {clockFormat === 12 && <span className="text-[30px] md:text-[50px] leading-none">{dateFormat(time, 'zone')}</span>}
        </div>
      </section>

      <section className="max-w-4.5/5 h-auto overflow-hidden msg-container">
        <div className="font-medium text-[23px] text-center md:text-[40px] capitalize">
          {dayTime}, {name}
        </div>
      </section>
    </>
  );
};

export default Clock;
