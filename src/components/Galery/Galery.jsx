import './Galery.scss'
import '../Section/Section.scss'


function Laboratory() {

  return (
    <section className='galery section' id='galery'>
      <div className='galery__container'>
        <div className='galery__title-container'>
          <h3 className='galery__title section__title'>Галерея</h3>
        </div>

        <div className='galery__photo-container'>
          <div className='galery__photo galery__photo_size_big galery__photo_number1'></div>
          <div className='galery__photo galery__photo_size_medium galery__photo_number2'></div>
          <div className='galery__photo galery__photo_size_small galery__photo_number3'></div>
          <div className='galery__photo galery__photo_size_small galery__photo_number4'></div>
          <div className='galery__photo galery__photo_size_small galery__photo_number5'></div>
          <div className='galery__photo galery__photo_size_small galery__photo_number6'></div>
          <div className='galery__photo galery__photo_size_medium galery__photo_number7'></div>
        </div>
      </div>
    </section >

  )
}

export default Laboratory