import React from 'react'
import { Col,Row } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'




function Landingpage() {


  // function defintion

  // redirect from one page to another page we can use


  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate('/home')

  }


  return (
    <div className='container m-5'>

    <Row>

<Col></Col>

<Col lg={6}>

<h1>WELCOME VIDEO.COM</h1>
<p style={{textAlign:'justify'}}>where user can use their favorite video.user can upload any youtube videos by copy and paste their url in to video.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now!!!</p>


<button onClick={handleNavigate} className='btn btn-success'>CLICK HERE TO KNOW MORE</button>

</Col>

<Col lg={5}>

<img className='img-fluid ' src="https://i.pinimg.com/originals/10/ae/d9/10aed99a89bcd8ca74b6283d30db4a52.gif" width={"600px"} alt="no image" />



</Col>


    </Row>



    </div>
  )
}

export default Landingpage