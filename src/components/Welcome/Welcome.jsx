import './Welcome.scss'
import '../Section/Section.scss'


function Welcome() {

  return (
    <div className='welcome section' >
      <div className='welcome__container'>
        <p className='welcome__text'>Добро пожаловать <span style={{whiteSpace: 'nowrap'}}>в медицинскую</span> лабораторию
          KapibaraLab, где работают исключительно капибары — ваш надежный
          партнер <span style={{whiteSpace: 'nowrap'}}>в обеспечении</span> качественной <span style={{whiteSpace: 'nowrap'}}>и точной</span> диагностики!</p>
      </div>
    </div>
  )
}

export default Welcome