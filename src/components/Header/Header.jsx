import './Header.css'
import '../Link/Link.css'
import Logo from '../Logo/Logo'


function Header() {

  return (
    <header className='header'>
      <div className='header__container'>

        <div className='header__logo-container'>
          <Logo place='header'/>
          <p className='header__logo-text'>Современные методики диагностики</p>
        </div>

        <nav className='header__menu'>
          <ul className='header__links'>
            <li>
              <a href='#laboratory' className='header__link header__link_active link' rel='noreferrer'>Лаборатория</a>
            </li>
            <li>
              <a href='#galery' className='header__link link' rel='noreferrer'>Галерея</a>
            </li>
            <li>
              <a href='#form' className='header__link link' rel='noreferrer'>Оставить заявку</a>
            </li>
          </ul>
        </nav>

        <div className='header__contacts'>
          <span className='header__icon header__icon_phone'></span>

          <div className='header__contacts-container'>
            <p className='header__phone-number'>
              <a className='header__phone-link link' href='tel:+71234567890'>
                +7 123 456 7890
              </a>
            </p>
            <p className='header__text'>
              Звонок бесплатный</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header