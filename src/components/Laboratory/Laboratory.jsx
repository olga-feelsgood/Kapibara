import './Laboratory.scss'
import '../Section/Section.scss'
import '../Link/Link.scss'
import kapibara from '../../images/laboratory_kapibara.png'


function Laboratory() {

  return (

    <section className='laboratory section' id='laboratory'>
      <div className='laboratory__container'>
        <h3 className='laboratory__title section__title'>Лаборатория</h3>
        <div className='laboratory__wrapper'>
          <div className='laboratory__text-container'>
            <p className='laboratory__text laboratory__text_part1'>Наша лаборатория предлагает широкий
              спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся на
              анализе биоматериалов, микробиологических исследованиях,
              генетической диагностике и многом другом. </p>

            <p className='laboratory__text'>Мы используем современное оборудование и методики и гарантируем
              точность и надежность результатов. </p>

            <a href='#form' className='laboratory__link link' rel='noreferrer'>Оставить заявку</a>
          </div>
          <div className='laboratory__photo-container'>
            <img className='laboratory__photo' alt='Капибара' src={kapibara} />
          </div>
        </div>
      </div>

    </section >

  )
}

export default Laboratory