import './Logo.scss'
import '../Link/Link.scss'
import headerLogo from '../../images/header_logo.svg'
import footerLogo from '../../images/footer_logo.svg'
import { Link } from 'react-router-dom'


function Logo(props) {
  
  return (
    <Link to='/Kapibara/'> <img className='logo link' src={props.place ==='header'? headerLogo : footerLogo} alt='логотип' /></Link>
  )
}

export default Logo