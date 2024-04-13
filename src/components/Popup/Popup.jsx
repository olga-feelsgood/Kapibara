import './Popup.scss'

function Popup(props) {

  return (
    <div className={props.isOpen ? 'popup popup_opened' : 'popup'} onClick={props.onClose}>
      <span className='popup__icon'></span>
      <p className='popup__text'> Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</p>
    </div>
  )
}

export default Popup;