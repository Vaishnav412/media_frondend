import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';


function Header() {
    return (
        <div>

            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand >
                        <span className='text-light'>


                            <Upload/><span>video.com</span>



                        </span>
                    </Navbar.Brand>
                </Container>
            </Navbar>





        </div>
    )
}

export default Header