import './Footer.sass'
import '../Section/Section.sass'
import Logo from '../Logo/Logo'


function Footer() {

  return (
    <footer className='footer section'>
      <div className='footer__container'>
        <p className='footer__rights'>Все права защищены Российской Ассоциацией Капибар</p>

        <div className='footer__logo-container'>
          <Logo place='footer' />
        </div>
      </div>
    </footer>
  )
}

export default Footer