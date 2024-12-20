import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import MyProfile from '../../Components/MyProfile/MyProfile'
import Logout from '../../Components/Logout/Logout'
import ProductDescription from '../../Components/ProductDescription/ProductDescription'

const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
            <Route path='/adminprofile' element={<MyProfile/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/productdescription' element={<ProductDescription/>}/>
        </Routes>
    </div>
  )
}

export default Admin