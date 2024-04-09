import './Laboratory.css'
import '../Section/Section.css'
import '../Link/Link.css'
import kapibara from '../../images/laboratory_kapibara.png'
import { Link } from 'react-router-dom'


function Laboratory() {

  return (

    <section className='laboratory'>
      <div className='laboratory__container'>
        <div className='laboratory__text-container'>
          <h3 className='laboratory__title section'>Лаборатория</h3>

          <p className='laboratory__text laboratory__text_part1'>Наша лаборатория предлагает широкий
            спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся на
            анализе биоматериалов, микробиологических исследованиях,
            генетической диагностике и многом другом. </p>

          <p className='laboratory__text'>Мы используем современное оборудование и методики и гарантируем
            точность и надежность результатов. </p>

          <Link className='laboratory__link link' to='/Kapibara/'>Оставить заявку</Link>
        </div>
        <div className='laboratory__photo-container'>
          <img className='laboratory__photo' alt='Капибара' src={kapibara} />
        </div>
      </div>

    </section >

  )
}

export default Laboratory