import React from 'react'
import LiftSide from './LiftSide'
import Main from './Main'
import RightSide from './RightSide'
import {Row } from 'react-bootstrap'

const Section = () => {
  return (
   <div className='section px-3'>
      <Row>
         <div className='col-md-3 col-xs-12 col-sm-6 mb-5'>
      <LiftSide/>
         </div>
         <div className='col-md-6 col-xs-12 col-sm-6 mb-5'>
      <Main/>
         </div>
         <div className='col-md-3 col-xs-12 col-sm-6 mb-5'>
      <RightSide/>
         </div>
      </Row>
   </div>
  )
}

export default Section
