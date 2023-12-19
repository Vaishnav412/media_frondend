import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel, Form } from 'react-bootstrap';
import { addVideo } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({handleResponse}) {

  const [uploaddata, setuploaddata] = useState({

    id: "", caption: "", thumbnail: "", url: ""


  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // define setInput function
  const setInput = (e) => {
    const { name, value } = e.target

    // ...statename - spread operator

    setuploaddata({ ...uploaddata, [name]: value })
    // setuploaddata(e.target.value)
  }
  console.log(uploaddata);

  // extract embadded url from youtube original url

  const extractUrl = (e) => {

    let youtubeUrl = e.target.value

    if (youtubeUrl.includes("v=")) {
      let index = youtubeUrl.indexOf("v=")

      console.log(index);

      let videoUrl = youtubeUrl.substring(index + 2, index + 13)

      console.log(videoUrl);

      let videoData = uploaddata

      videoData.url = `https://www.youtube.com/embed/${videoUrl}`

      setuploaddata(videoData)



    }
    console.log(uploaddata);


  }

  const handleAdd = async () => {
    const { id, caption, thumbnail, url } = uploaddata

    if (!id || !caption || !thumbnail || !url) {
      toast.error('please fill the form completely',{
        position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      })
    }
    else {
      // make api call
      const response = await addVideo(uploaddata)


      if (response.status >= 200 && response.status < 300) {

        // console.log(response.data);

        handleResponse(response.data)



        setShow(false);
        toast.success("new video uploaded successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })

      }
      else {
        toast.warning("please provide a unique id!!!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    }
  }


  // youtube original url

  // https://www.youtube.com/watch?v=nYEoxne_20Y

  // embadded url

  // https://www.youtube.com/embed/nYEoxne_20Y

  return (
    <>
      <div className='btn' onClick={handleShow}>
        <PlusCircle color='green' size={90} />
      </div>

      {/* model */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>upload video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* id */}
            <FloatingLabel className='mb-3' controlId="floatingid" label="id">
              <Form.Control name='id' onChange={setInput} type="text" placeholder="Uploading video id" />
            </FloatingLabel>

            {/* caption */}
            <FloatingLabel className='mb-3' controlId="floatingcaption" label="Uploading video caption">
              <Form.Control name='caption' onChange={setInput} type="text" placeholder="Video caption" />
            </FloatingLabel>

            {/* video cover image url */}
            <FloatingLabel className='mb-3' controlId="floatingimage" label="Video cover image url">
              <Form.Control name='thumbnail' onChange={setInput} type="text" placeholder="Video cover image url" />
            </FloatingLabel>

            {/* uploading video link */}
            <FloatingLabel className='mb-3' controlId="floatinglink" label="Uploading video link">
              <Form.Control name='url' onChange={extractUrl} type="text" placeholder="video link" />
            </FloatingLabel>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />


    </>
  )
}

export default Add