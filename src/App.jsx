import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faWarehouse, faPeopleGroup, faClipboardList, faUserTie, faFileInvoice, faBars } from '@fortawesome/free-solid-svg-icons'
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
import Dashboard from './pages/dashboard.jsx'
import Inventory from './pages/Inventory.jsx'
import Admins from './pages/Admins.jsx'
import SuperAsia from './pages/SuperAsia.jsx'
import OtherBrands from './pages/OtherBrands.jsx'
import Reports from './pages/Reports.jsx'
import Haier from './pages/Haier.jsx'
import PEL from './pages/PEL.jsx'
import Customers from './pages/Customers.jsx'
import Invoices from './pages/Invoice.jsx'
import Dawnlance from './pages/Dawnlance.jsx'



function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleInventory = () => setIsInventoryOpen(!isInventoryOpen);

  return (
    <>

      <BrowserRouter>
        <nav style={{ float: 'left', width: isOpen ? "300px" : "40px", padding: '10px', backgroundColor: "#303041", height: "100vh" }} >
          <div className="header"  ><div style={{ display: isOpen ? "block" : "none", }} className="logo">Logo</div> <FontAwesomeIcon className='menu' onClick={toggle} icon={faBars} /></div>
          <ul style={{
            display: 'flex', flexDirection: 'column', gap: '10px', listStyleType: 'none', paddingLeft: '0'
          }}>
            <li >
              <NavLink className='link' to="/dashboard" >
                <FontAwesomeIcon className='icon' icon={faHouse} />
                <div style={{ display: isOpen ? "block" : "none", }} className="title">Dashboard</div>
              </NavLink>
            </li>
            <li >
            <NavLink className='link' to="/inventory">

                <div style={{display:'flex', flex: '0%'}} onClick={toggleInventory}>

                  <FontAwesomeIcon style={{  flex: '0%',display: 'grid',  placeItems: 'center', paddingRight:'75px'}} className='icon' icon={faWarehouse} />

                  <div style={{ flex: '15%',display: isOpen ? "flex" : "none" }} className="title"  >Inventory</div>
                </div>

              </NavLink>

              {isInventoryOpen && (
                <ul style={{display: isOpen ? "block" : "none" , listStyleType: 'none', paddingLeft: '20px' }}>
                  <li><NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to="/dawnlance">Dawnlance</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to="/haier">Haier</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to="/superAsia">Super Asia</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to="/pel">PEL</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to="/otherBrands">Other Brands</NavLink></li>
                </ul>
              )}
            </li>
            <li>
              <NavLink className='link' to="/customers" >
                <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                <div style={{ display: isOpen ? "block" : "none", }} className="title">Customers</div>
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to="/reports" >
                <FontAwesomeIcon className='icon' icon={faClipboardList} />
                <div style={{ display: isOpen ? "block" : "none", }} className="title">Reports</div>
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to="/admins" >
                <FontAwesomeIcon className='icon' icon={faUserTie} />
                <div style={{ display: isOpen ? "block" : "none", }} className="title">Admins</div>
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to="/invoice" >
                <FontAwesomeIcon className='icon' icon={faFileInvoice} />
                <div style={{ display: isOpen ? "block" : "none", }} className="title">Invoice</div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/haier" element={<Haier />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/otherBrands" element={<OtherBrands />} />
          <Route path="/superAsia" element={<SuperAsia />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/pel" element={<PEL />} />
          <Route path="/Dawnlance" element={<Dawnlance />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default SideBar
