import React, { useState } from 'react'
import "./index.scss";
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/Logo.png'
import VietNam from '../../assets/VN.png'
import USA from '../../assets/US.png'
import { ReactComponent as DownIcon } from '../../assets/arDown.svg'
import { ReactComponent as CheckIcon } from '../../assets/check.svg'
import { ReactComponent as MenuOutlined } from '../../assets/menu.svg'


export const HeaderMenu = (props) => {
  const [chooseLang,setChooseLang] = useState(false)
  const { t } = useTranslation();
  const lang = localStorage.getItem('language') || 'vi'
  const Language = {
    vi:{
      label:t('vietnam'),
      icon: VietNam,
      values:'vi'
    },
    en:{
      label:t('english'),
      icon: USA,
      values:'en'
    }
  }
  const handleChangeLanguage=(value)=>{
    localStorage.setItem('language',value)
    if(lang != value){
      props.setIsLoading(true)
      window.location.reload();
    }
  }
	return (
    <>
      <div className={props.className}>
        <div className='headerMenu'>
          <div className="headerMenu-logo">
            <img className='headerMenu-img' src={Logo}/>
          </div>
          <div className='headerMenu-main'>
            <a href='#aboutUs' className='headerMenu-main-item'>{t('AboutUs')}</a>
            <a href='#games' className='headerMenu-main-item'>{t('Game')}</a>
            <a href='#partners' className='headerMenu-main-item'>{t('PARTNERS')}</a>
            <a href='#contact' className='headerMenu-main-item'>{t('CONTACT_US')}</a>
            <div className='select-lang' onClick={()=>setChooseLang(!chooseLang)}>
              <img src={Language[lang].icon} alt="" />
              <DownIcon></DownIcon>
              {
                chooseLang && (
                  <div className={`chosse-lang ${chooseLang ? "slide-down":"slide-up"}`}>
                    {Object.values(Language).map(item=>(
                      <div className='chosse-lang-item' onClick={()=>handleChangeLanguage(item.values)}>
                        <div className='checked'>{item.values == lang ? <CheckIcon></CheckIcon> : ''}</div>
                        <div><img src={item.icon} alt="" /></div>
                        <div>{item.label}</div>
                      </div>
                    ))}
                  </div>
                )
              }
            </div>
          </div>
          <div className='headerMenu-mobile'>
            <MenuOutlined onClick={()=>props.setMenuMobile(true)} width={40} height={40} />
          </div>
        </div>
      </div>
    </>

  )
}
