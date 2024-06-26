import './Header.sass'
import '../Section/Section.sass'
import Logo from '../Logo/Logo'


function Header() {

  return (
    <header className='header section'>
      <div className='header__container'>

        <div className='header__logo-container'>
          <Logo place='header' />
          <p className='header__logo-text'>Современные методики диагностики</p>
        </div>

        <nav className='header__menu'>
          <ul className='header__links'>
            <li>
              <a href='#laboratory' className='header__link' rel='noreferrer'>Лаборатория</a>
            </li>
            <li>
              <a href='#galery' className='header__link' rel='noreferrer'>Галерея</a>
            </li>
            <li>
              <a href='#form' className='header__link' rel='noreferrer'>Оставить заявку</a>
            </li>
          </ul>
        </nav>

        <div className='header__contacts'>
          <a className='header__phone-link link' href='tel:+71234567890'>
            <span className='header__icon header__icon_phone'></span>
            <div className='header__contacts-container'>
              +7 123 456 7890
              <p className='header__text'>
                Звонок бесплатный</p>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header