import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/add_product_icon.png'
import list_product_icon from '../../assets/list_product_icon.png'
import my_profile from '../../assets/my-profile.png'
import logout from '../../assets/logout.png'
import product_description from '../../assets/product-description.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="item-first">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>

        <Link to={'/productdescription'} style={{textDecoration:"none"}}>
            <div className="product-description">
                <img src={product_description} alt="" />
                <p>Product Description</p>
            </div>
        </Link>
        </div>

        <div className="item-last">
        <Link to={'/adminprofile'} style={{textDecoration:"none"}}>
            <div className="my-profile">
                <img src={my_profile} alt="" />
                <p>My profile</p>
            </div>
        </Link>

        <Link to={'/logout'} style={{textDecoration:"none"}}>
            <div className="admin-logout">
                <img src={logout} alt="" />
                <p>Logout</p>
            </div>
        </Link>

        
        </div>
    </div>
  )
}

export default Sidebar