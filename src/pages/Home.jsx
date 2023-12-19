import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'





function Home() {

  const [serverResponse, setserverResponse] = useState({})

  const handleResponse = (response) => {

    setserverResponse(response)

  }

  return (
    <>

      <h1 className='text-info ms-5 mb-5'>All Video Cards</h1>

      <Link to={'/watchhistory'} style={{textDecoration:"none", fontSize:"25px"}} className='ms-auto text-info'>Watch History</Link>

      <div className="container-fluid">


        <Row>
          {/* add component selector */}
          <Col lg={1}>

            <Add handleResponse={handleResponse} />

          </Col>

          {/* view component selector */}
          <Col lg={7}>

            <View serverResponse={serverResponse} />

          </Col>

          {/* category component selector */}
          <Col lg={4}>
            <Category  />
          </Col>


        </Row>





      </div>


    </>
  )
}

export default Home