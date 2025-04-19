import React, { useEffect, useState } from 'react'
import "./index.scss";

import Banner from '../../assets/BG.png'
import Fairy from '../../assets/Fairy.png'
import { HeaderMenu } from '../menu';
import { t } from 'i18next';
import { Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
export const HeaderBanner = ({setIsLoading,setMenuMobile}) => {
  const readyDate = '2025/5/18 08:00:00'
  const suffix = (
    <ArrowRightOutlined
      style={{
        fontSize: 18,
        color: '#000000',
      }}
    />
  );

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +new Date(readyDate) - +now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(calculateTimeLeft());
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [readyDate]);
	return (
    <div className='header'>
      <HeaderMenu setIsLoading={setIsLoading} setMenuMobile={setMenuMobile} className="Menu"></HeaderMenu>
      <div className='headerBanner'>
        <img className='headerBanner-img' src={Banner}/>
      </div>
      <div className='headerBanner-Fairy'>
        <img src={Fairy}/>
      </div>
      <div className='overlay'>
        <div className='layer'></div>
      </div>
      <div className='banner-content'>
        <div className='main'>
          <div className='header-content'>{t('ready')}</div>
          <div className='time-count'>
            {Object.entries(timeLeft).map(([label, value]) => {
              return <>
              <div className="countdown-item" key={label}>
                <div className="nums">{value}</div>
                <div className="nums-text">{t(label)}</div>
              </div>
              <div className='nums colon'>:</div>
              </>
            })}
          </div>

          <div className='text-note'>{t('ready_note')}</div>
          <div className='email'>
            <Input type='email' placeholder={t('enter_email')} suffix={suffix}></Input>
          </div>
        </div>
      </div>
    </div>
  )
}
