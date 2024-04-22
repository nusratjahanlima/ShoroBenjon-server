import './Navbar.css'
import navlogo from '../../assets/admin-nav-logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-left'>
    <img src={navlogo} alt="" className="nav-logo" />
    <p>SHORO <span>BENJON</span></p>
    </div>
    <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar