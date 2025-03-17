import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { ToastContainer , toast } from 'react-toastify';



function Add({setuploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
     setShow(false);
     setVideoDetails({
      caption:'',
    thumbnailUrl:'',
    embededLink:''
     })
  }
  const handleShow = () => setShow(true);
  const [videoDetails,setVideoDetails] = useState({
    caption:'',
    thumbnailUrl:'',
    embededLink:''
  })
  const handleUpload = async()=>{
    console.log("Upload Video Details ");
      console.log(videoDetails);
      const {caption,thumbnailUrl,embededLink}=videoDetails;
      if(!caption || !thumbnailUrl || !embededLink){
        toast.warning("Please fill the  form completely")

      }
      else{
       const result = await uploadVideo(videoDetails);
      //  console.log("Result");
       console.log(result);
       if(result.status === 201){
        console.log();
        console.log(result.status);
        
        setuploadVideoStatus(result)
        toast.success("Successfully uploaded")
        handleClose();
       }
        else{
          toast.error("Something went wrong")
        }
       
      }
      
    }
    const setEmbededLink =(data) =>   {
      // set mbeded link
      const link = `https://www.youtube.com/embed/${data.slice(-11)}`
      console.log(link);
      setVideoDetails({...videoDetails, embededLink:link})
    }
          return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='textstyle'>Upload New Video</h5>
        <button className='btn' onClick={handleShow} ><i class="fa-solid fa-cloud-arrow-up textstyle fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textstyle'><i class="fa-solid fa-film text-warning me-3"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textstyle fw-bolder'>Please Fill The Form</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Video Title" 
             onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}
             />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Video Thumbnail" 
               onChange={(e)=>setVideoDetails({...videoDetails,thumbnailUrl:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Video Link" 
              onChange={(e)=>setEmbededLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      pauseOnHover
      theme="dark"
      />
    </>
  )
}

export default Add