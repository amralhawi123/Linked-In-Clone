import React from 'react'
import {Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import logo from '../../images/home-logo.svg'
import { connect } from "react-redux";
import { signOutAPI } from '../../redux/actions';
import { Link } from 'react-router-dom';

const NavbarHome = (props) => {
  
  return (
    <div className='navbarHome'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='gap-5'>
<div className='fixed-nav d-flex align-items-center gap-4 'style={{width:"40%"}}>
<Navbar.Brand href="#">
    <img src={logo} alt='logo'/>
   </Navbar.Brand>
        <Form inline style={{flex:1}}>
        <Row >
            <Form.Control
              type="text"
              placeholder="Search.."
              className=" mr-sm-2"
            />
        </Row>
      </Form>
</div>
          <Nav className="links">
            <Nav.Link href="#home" className='text-center '> <i class="fa-solid fa-house d-block"></i> Home</Nav.Link>
            <Nav.Link href="#link" className='text-center '> <i class="fa-solid fa-network-wired d-block"></i> My Network</Nav.Link>
            <Nav.Link href="#link" className='text-center '> <i class="fa-solid fa-briefcase d-block"></i> Jobs</Nav.Link>
            <Nav.Link href="#link" className='text-center '> <i class="fa-solid fa-comment-dots d-block"></i> Messages</Nav.Link>
            <Nav.Link href="#link" className='text-center '> <i class="fa-solid fa-bell d-block"></i> Notification</Nav.Link>
            <Nav.Link href="#link" className='p-0'>
            <NavDropdown href="#link" title={props.user && props.user.photoURL
 ? <img src={props.user.photoURL
 } alt='img'/> : <i class="fa-solid fa-user-tie"></i>} id="basic-nav-dropdown">
              <NavDropdown.Item href="" ><Link to='/profile'>Profile</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" onClick={() => props.SignOut()}>Sign Out</NavDropdown.Item>
            </NavDropdown>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SignOut: () => dispatch(signOutAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarHome)
