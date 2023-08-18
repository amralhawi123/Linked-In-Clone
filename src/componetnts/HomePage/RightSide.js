import React from 'react'
import { Col } from 'react-bootstrap'
import bannar from '../../images/banner-image.jpg'
import Card from 'react-bootstrap/Card';

const RightSide = () => {
  return (
    <div className='rightSide'>
      <Col className='box b1 '>
      <Card style={{ width: '100%' }} className='text-center'>
      <div className=' p-3 text-start d-flex align-items-center justify-content-between'>
        <h4 className='fs-5 text-muted'>Add to your feed</h4>
        <i class="fa-solid fa-user-plus"></i>
      </div>

    <div className='p-3 text-start d-flex align-items-center'>
      <div className='mx-2 follow'>
      <p className='m-0 p-0'>Follow</p>
      </div>
      <p className='m-0 p-0'>#Linkedin</p>
    </div>
    <div className='p-3 text-start d-flex align-items-center'>
      <div className='mx-2 follow'>
      <p className='m-0 p-0'>Follow</p>
      </div>
      <p className='m-0 p-0'>#video</p>
    </div>
      <div className='d-flex align-items-center p-3 text-start'>
        <h4 className='fs-5 mx-2 my-0' style={{color:"var(--main-color)"}}>view all recomendations</h4>
        <i class="fa-solid fa-arrow-right" style={{color:"var(--main-color)"}}></i>
      </div>
    </Card>
      </Col>
      <Col className='box b2'>
        <Card className='p-2 text-start mt-2' style={{ width: '100%' }}>
          <Card.Img src={bannar} />
        </Card>
      </Col>
    </div>
  )
}

export default RightSide
