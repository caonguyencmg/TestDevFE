import React from 'react'
import "./index.scss";

import { t } from 'i18next';
import { ArrowRightOutlined } from '@ant-design/icons';
import Logo from '../../assets/Logo.png'
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg'
import { ReactComponent as MapIcon } from '../../assets/map.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { Input } from 'antd';

export const Footer = ({setIsLoading}) => {

  const suffix = (
    <ArrowRightOutlined
      style={{
        fontSize: 18,
        color: '#fff',
      }}
    />
  );

	return (
    <>
      <div className='footer'>
        <div className='top-footer'>
          <div className='left-item'>
            <div className='logo'>
              <img src={Logo} alt="" />
            </div>
            <div className='social'>
              <div><TwitterIcon></TwitterIcon></div>
              <div><FacebookIcon></FacebookIcon></div>
              <div><LinkedinIcon></LinkedinIcon></div>
            </div>
          </div>
          <div className='right-item'>
            <div className='Address'>
              <div className='text-big footer-title'>{t('Address')}</div>
              <div>
                <div></div>
                <div>
                  <div className='content'><div><MapIcon></MapIcon></div>{t('Address1')}</div>
                  <div className='content'><div><MapIcon className='hidden'></MapIcon></div>{t('Address2')}</div>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <div className='content'><div><PhoneIcon></PhoneIcon></div>{t('phone')}</div>
                </div>
              </div>
            </div>
            <div className='Subscribe'>
              <div className='text-big footer-title'>{t('Subscribe')}</div>
              <div className='content'>{t('Subscribe1')}</div>
              <div className='email'>
                <Input type='email' placeholder={t('enter_email')} suffix={suffix}></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          2017 Copyright. Policy.
        </div>
      </div>
    </>
  )
}
