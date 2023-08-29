import React, { useEffect } from 'react'
import homeCover from '../images/login-hero.svg'
import { Container, Nav, Row } from 'react-bootstrap'
import { signInApi } from './../redux/actions/index';
import {connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Landing = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    props.user && navigate("/home")
  }, [navigate, props.user])

  return (
    <div className='landing'>
      <Container>
      <Row>
         <div className='info'>
            <h2>Welcome to your professional communty</h2>
            <Nav.Link href="#" onClick={() => props.SignIn()}><i class="fa-brands fa-google" ></i> Sign In With Google</Nav.Link>
         </div>
          <div className='home-cover'>
       <img src={homeCover} alt='logo'/>
    </div>
      </Row>
      </Container>
    </div>
  )
}
const mapStateToPropes = (state) => {
  return {
    user : state.userReducer.user,
  }
}
const mapStateDispathchToPropes = (dispatch) => {
  return {
    SignIn : ()=> dispatch(signInApi())
  }
}

export default connect(mapStateToPropes, mapStateDispathchToPropes)(Landing)