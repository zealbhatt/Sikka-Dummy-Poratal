import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalPopup({ show, handleClose, title,  children }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer><button id='paybtn'style={{width:"130px",height:"35px", color:"white",fontWeight:"500"}}>Submit</button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalPopup
