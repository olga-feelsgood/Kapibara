import './Form.css'
import '../Section/Section.css'
import Input from '../Input/Input'
import Button from '../Button/Button'


function Form() {

  return (

    <section className='form'>
      <div className='form__container'>
        <div className='form__text-container'>
          <h3 className='form__title section'>Заявка на диагностику</h3>

          <p className='form__text'> Доверьте свои медицинские исследования надежным
            капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>

        </div>
        <form className='form__form-container'>
          <div className='form__inputs-container'>
            <Input
              inputType='text'
              inputName='surname'
              // inputValue=''
              // onChange={onChange}
              //errorMessage=""
              inputPlaceholder='Фамилия' />
            <Input
              inputType='text'
              inputName='name'
              // inputValue=''
              // onChange={onChange}
              //errorMessage=""
              inputPlaceholder='Имя' />
            <Input
              inputType='text'
              inputName='middlename'
              // inputValue=''
              // onChange={onChange}
              //errorMessage=""
              inputPlaceholder='Отчество' />
          </div>
          <Button
            stepIsValid='true' //дописать
            buttonTitle='Отправить'
            buttonType='submit'
          />
        </form>
      </div>

    </section >

  )
}

export default Form