import { Dropdown, DropdownMenu, DropdownToggle} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sikka1_png from '../../../assets/sikka-ai-logo.png'
import './Navbar.css'
import { FaRegUserCircle } from 'react-icons/fa';
import { Grid } from '@mui/material';
 function Header() {
   return (
    <Grid sm={12}>
     <Navbar expand='lg' className="navbar fixed-top">
      <div className='container'>
         <Navbar.Brand href='/Home'><img src={sikka1_png} style={{height:'30px',width:'130px', marginTop:'-10px'}} alt='logoimg'/></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="navitems">
           <Nav.Link >Tables</Nav.Link>
           <Nav.Link href="#Billing">Billing</Nav.Link>
             <Nav.Link href="/OurTeam">Our-Team</Nav.Link>
             <Nav.Link href="/Aboutus">About-Us</Nav.Link>
             <Nav.Link href="/Calender">Notifications</Nav.Link>
             <Nav.Link href="/Contactus">Contact-Us</Nav.Link>
             <Dropdown align="end" autoClose="outside">
              <DropdownToggle variant='transparent'><FaRegUserCircle  size={33} color='black'/></DropdownToggle>
              <DropdownMenu style={{backgroundColor:'#fef9ff'}}>
               <Dropdown.Item href="/">Log-Out</Dropdown.Item>
               <Dropdown.Item href="#action/3.2">Manage-Account</Dropdown.Item>
               </DropdownMenu>
             </Dropdown>
           </Nav>
         </Navbar.Collapse>
         </div>
    </Navbar>
    </Grid>
  );
 }

export default Header;


