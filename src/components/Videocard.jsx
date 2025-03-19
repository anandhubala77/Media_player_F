import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { ToastContainer ,toast } from 'react-toastify';

function Videocard({displayVideo,setdeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const { caption , embededLink } = displayVideo;
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2,0);
    // const seconds = today.getSeconds();
    // console.log(`${day}-${month}-${year} ${hour}-${minutes}`);
    const timeValue = day + '-' + month + '-' + year + " " + hour + '-' + minutes;
    const history = {
      caption: caption, 
      embededLink : embededLink,
      timeStamp : timeValue
    }
    await addToHistory(history)
    
  };
  const removeVideo = async(id)=>{
      const response = await deleteVideo(id)
      console.log("delete response");
          console.log(response);
      if(response.status === 200){
        console.log(response.status);
        
        setdeleteVideoStatus(response)
        toast.success(`${displayVideo.caption} successfully deleted`)
      }

      
  }
  const dragStarted=(e,id)=>{
    console.log(`drag stare ${id}`);
    e.dataTransfer.setData("videoid",id)
    
  }
  return (
    <>
     <Card  style={{ width: '16rem',height:'300px',padding:'5px' }} draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)} >
      <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={'200px'}
      onClick={handleShow} />
      <Card.Body>
        <div className='d-flex justify-content-between mt-3'>
        <Card.Title style={{fontSize:'1rem'}}>{displayVideo.caption} </Card.Title>
        <Button variant="danger " onClick={()=>removeVideo(displayVideo.id)}>  <i class="fa-solid fa-trash"></i></Button>
        </div>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={displayVideo.embededLink} allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard