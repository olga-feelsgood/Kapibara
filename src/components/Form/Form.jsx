import './Form.sass'
import '../Section/Section.sass'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Popup from '../Popup/Popup'
import { useEffect, useState } from 'react'
import useForm from '../../utils/useForm'
import { USERNAMEREGEX } from '../../utils/constants'
import { registerNewUser } from '../../utils/Register'


function Form() {

  const { inputValues, handleChange, errors, isFormValid, resetForm } = useForm();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    resetForm();
  }, [resetForm])

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('форма отправлена');
    console.log({
      name: inputValues.name,
      surname: inputValues.surname,
      middlename: inputValues.middlename
    })
    registerNewUser({
      name: inputValues.name,
      surname: inputValues.surname,
      middlename: inputValues.middlename
    });
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <section className='form section' id='form'>
        <div className='form__container'>
          <div className='form__text-container'>
            <h3 className='form__title section__title'>Заявка <span style={{whiteSpace: 'nowrap'}}>на диагностику</span></h3>

            <p className='form__text'> Доверьте свои медицинские исследования надежным
              капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>

          </div>
          <form className='form__form-container' onSubmit={handleSubmit} name='form'>
            <div className='form__inputs-container'>
              <Input
                inputType='text'
                inputName='surname'
                pattern={USERNAMEREGEX}
                value={inputValues.surname || ''}
                onChange={handleChange}
                errorMessage={errors.surname || ''}
                inputPlaceholder='Фамилия' />
              <Input
                inputType='text'
                inputName='name'
                pattern={USERNAMEREGEX}
                value={inputValues.name || ''}
                onChange={handleChange}
                errorMessage={errors.name || ''}
                inputPlaceholder='Имя' />
              <Input
                inputType='text'
                inputName='middlename'
                pattern={USERNAMEREGEX}
                value={inputValues.middlename || ''}
                onChange={handleChange}
                errorMessage={errors.middlename || ''}
                inputPlaceholder='Отчество' />
            </div>
            <Button
              stepIsValid={isFormValid}
              buttonTitle='Отправить'
              buttonType='submit'
            />
          </form>
        </div>
      </section >
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  )
}

export default Form