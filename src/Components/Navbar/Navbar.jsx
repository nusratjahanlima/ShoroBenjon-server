import './Navbar.css'
import navlogo from '../../assets/shorobenjon.png'
import admin_profile from '../../assets/admin_profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={navlogo} alt="" className="nav-logo" />
          <div className='nav_text'>
            <p className='p1'>SHORO <span>BENJON</span></p>
          </div>
      </div>

      <div className="navbar-right">
        <img src={admin_profile} className='nav-profile' alt="" />
      </div>
    </div>
  )
}

export default Navbar