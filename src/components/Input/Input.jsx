import './Input.sass';


function Input(props) {

  return (
    <div className='input'>
    <input
      className={`input__field ${props.errorMessage && 'input__field_error'}`}
      type={props.inputType}
      name={props.inputName}
      value={props.inputValue}
      onChange={props.onChange}
      placeholder={props.inputPlaceholder}
      required
      autoComplete='on'
    />
    <span className='input__error-container'>{props.errorMessage}</span>
    </div>
  )
}

export default Input;