import React, { useEffect, useState } from 'react'
import "./index.scss";
import { HeaderBanner } from '../../components/headerBanner';
import LoadingPage from '../loadingPage';
import { t } from 'i18next';
import { ReactComponent as HourIcon } from '../../assets/24h.svg'
import { ReactComponent as DesignIcon } from '../../assets/design.svg'
import { ReactComponent as TeamIcon } from '../../assets/team.svg'
import Slider from "react-slick";
import Illustrator from './../../assets/Illustrator.png'
import { DownOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { ReactComponent as DownIcon } from '../../assets/arDown.svg'
import { ReactComponent as CheckIcon } from '../../assets/check.svg'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'
import VietNam from '../../assets/VN.png'
import USA from '../../assets/US.png'
import Game1 from './../../assets/game1.png'
import Game2 from './../../assets/game2.png'
import Game3 from './../../assets/game3.png'
import Game4 from './../../assets/game4.png'
import Game5 from './../../assets/game5.png'
import Game6 from './../../assets/game6.png'
import Game7 from './../../assets/game7.png'
import Game8 from './../../assets/game8.png'
import Game9 from './../../assets/game9.png'
import Game10 from './../../assets/game10.png'
import Game11 from './../../assets/game11.png'
import Game12 from './../../assets/game12.png'
import Partner1 from './../../assets/partner1.png'
import Partner2 from './../../assets/partner2.png'
import Partner3 from './../../assets/partner3.png'
import Partner4 from './../../assets/partner4.png'
import Partner5 from './../../assets/partner5.png'
import Partner6 from './../../assets/partner6.png'
import Partner7 from './../../assets/partner7.png'
import Map from './../../assets/map.png'
import { Footer } from '../../components/footter';
import { useTranslation } from 'react-i18next';
export const HomePage = () => {
  const [isLoading,setIsLoading] = useState(false)
  const width = window.innerWidth
    const [chooseLang,setChooseLang] = useState(false)
    const [menuMobile,setMenuMobile] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true);
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
        setIsLoading(true)
        window.location.reload();
      }
    }
  const smallMobile= width <= 680
  const NextArrow = (props) => {
		const { onClick } = props;
		return (
			<div className="custom-arrow next" onClick={onClick}>
				<RightOutlined />
			</div>
		);
	};

	const PrevArrow = (props) => {
		const { onClick } = props;
		return (
			<div className="custom-arrow prev" onClick={onClick}>
				<LeftOutlined />
			</div>
		);
	};
	const settingSilde = {
		dots: false,
		infinite: true,
    slidesToShow: smallMobile ? 2 : 5,
    slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
    rows: 1,
    cssEase: "linear",
    speed: 3000,                 // Tốc độ chạy (ms) – càng cao chạy càng chậm và mượt
    autoplay: true,             // Tự động chạy
    autoplaySpeed: 0,           // Không delay giữa các lần chạy
    pauseOnHover: true,        // Tạm dừng khi rê chuột
    swipe: false,               // Không cho swipe thủ công (tuỳ)
	};
  const gameList=[
    {
      id:1,
      name:'E-Space',
      text:t('Game1'),
      img:Game1
    },
    {
      id:2,
      name:'Kingland',
      text:t('Game2'),
      img:Game2
    },
    {
      id:3,
      name:'The Last Game',
      text:t('Game3'),
      img:Game3
    },
    {
      id:4,
      name:'G-Dragon',
      text:t('Game4'),
      img:Game4
    },
    {
      id:5,
      name:'Pirates',
      text:t('Game5'),
      img:Game5
    },
    {
      id:6,
      name:'Witch Party',
      text:t('Game6'),
      img:Game6
    },
    {
      id:7,
      name:'Rocky',
      text:t('Game7'),
      img:Game7
    },
    {
      id:8,
      name:'Blue Fire',
      text:t('Game8'),
      img:Game8
    },
    {
      id:9,
      name:'Magic tree',
      text:t('Game9'),
      img:Game9
    },
    {
      id:10,
      name:'Aborigines',
      text:t('Game10'),
      img:Game10
    },
    {
      id:11,
      name:'Cinderella',
      text:t('Game11'),
      img:Game11
    },
    {
      id:12,
      name:'Egypt Game',
      text:t('Game12'),
      img:Game12
    },

  ]
  const partnerList=[
    {
      id:1,
      name:'2k',
      img:Partner1
    },
    {
      id:2,
      name:'Sega',
      img:Partner2
    },
    {
      id:3,
      name:'BookPro Gameshow',
      img:Partner3
    },
    {
      id:4,
      name:'Waly Disney',
      img:Partner4
    },
    {
      id:5,
      name:'First power up',
      img:Partner5
    },
    {
      id:6,
      name:'Game',
      img:Partner6
    },
    {
      id:7,
      name:'EA Game',
      img:Partner7
    },

  ]
  const handleClick = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>      
      {isLoading ? (
        <div className="criminal-loading d-flex" style={{height:'100vh',justifyContent:'center'}}>
          <LoadingPage type="content"/>
        </div>
      ):(
        <div>
          <HeaderBanner setIsLoading={setIsLoading} setMenuMobile={setMenuMobile}></HeaderBanner>
          <div className='body'>
            <div className='container'>
              <section id="aboutUs" className='aboutUs'>
                <div className='left-item'>
                  <div className='title'>
                    {t('AboutUs')}
                  </div>
                  <div className='content'>
                    {t('aboutUs_content')}
                  </div>
                  <div className='numCount'>
                    <div>
                      <div className='text-very-big'>
                        600<sub className='sub-text'>M</sub>+
                      </div>
                      <div className='text-big'>
                        {t('Users')}
                      </div>
                    </div>
                    <div className='item-2'>
                      <div className='text-very-big'>
                        135+
                      </div>
                      <div className='text-big'>
                        {t('Games')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='right-item'>
                  <div className='item'>
                    <div><HourIcon></HourIcon></div>
                    <div>
                      <div className='text-big'>{t('24Hour')}</div>
                      <div className='content'>{t('note1')}</div>
                    </div>
                  </div>
                  <div className='item'>
                    <div><DesignIcon></DesignIcon></div>
                    <div>
                      <div className='text-big'>{t('Design')}</div>
                      <div className='content'>{t('note2')}</div>
                    </div>
                  </div>
                  <div className='item'>
                    <div><TeamIcon></TeamIcon></div>
                    <div>
                      <div className='text-big'>{t('Team')}</div>
                      <div className='content'>{t('note3')}</div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="map" className='map'>
                <div className='Illustrator'>
                  <img src={Illustrator} alt="" />
                </div>
                <div className='map-img'>
                  <img src={Map} alt="" />
                </div>

              </section>
            </div>
            <section id="games" className='games'>
              <div>
                <div className='title'>{t('OurGames')}</div>
                <div className='content mw-860'>{t('note4')}</div>
                <div className='gameList'>
                  {gameList.map(item=>(
                    <div className='gameList-item'>
                      <img src={item.img} alt="" />
                      <div className='game-detail'>
                        <div className='game-name'>{item.name}</div>
                        <div className='game-note'>{item.text}</div>
                      </div>
                      <div class="overlay"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section id="partners" className='partners'>
              <div className='title'>{t('OurPartners')}</div>
              <div className='slider'>
                <div className={`card-slider`}>
                  <Slider {...settingSilde}>
                    {partnerList?.map((item)=>{
                      return(
                        <div className="slide">
                          <img src={item.img} alt={item.name} />
                        </div>
                      )
                    })}
                  </Slider>
                </div>
              </div>

            </section>
          </div>
          <section id='contact'>
            <Footer></Footer>
          </section>
        </div>
      )}
      <div className={`sub-menu ${menuMobile ? 'showMenu':''}`}>
        <div className='top-sub'>
          <div className='select-lang' onClick={()=>setChooseLang(!chooseLang)}>
            <div className='item'>
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
          <CloseIcon onClick={()=>setMenuMobile(false)}></CloseIcon>
        </div>
        <ul>
          <li className='headerMenu-mobile-item' onClick={()=>setMenuMobile(false)}><a href='#aboutUs'>{t('AboutUs')}</a></li>
          <li className='headerMenu-mobile-item' onClick={()=>setMenuMobile(false)}><a href='#games'>{t('Game')}</a></li>
          <li className='headerMenu-mobile-item' onClick={()=>setMenuMobile(false)}><a href='#partners'>{t('PARTNERS')}</a></li>
          <li className='headerMenu-mobile-item' onClick={()=>setMenuMobile(false)}><a href='#contact'>{t('CONTACT_US')}</a></li>
        </ul>

      </div>
      <span className='float-show-btn' onClick={()=>{handleClick()}}>
        {isAtTop ? <DownOutlined /> : <UpOutlined />}
      </span>
    </>
  )
}