import React, { useState } from 'react'
import { RiUserFollowFill } from 'react-icons/ri';
import { cardData } from '../../data/data';
import ModalPopup from '../AllModals/ModalPopup';
import BenifitsAvailModal from './BenifitsAvailModal';


export default function BenifitsCard(Data) {
 const [showModal, setShowModal] = useState(false);

 
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (<>
    <div className="container mt-4 mb-4">
    
      <div className="col-md-3">
        <div className="card">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: "start" }}>
              <RiUserFollowFill size={34} color="gray" />
              <h5 style={{marginTop:'30px'}}>{Data.name}</h5>
            </div>
            <div className="col-md-6">
              <h5>Benefits Available</h5>
              <h3>{Data.benefits}</h3>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col">
              <span>+3%</span>
              <p>than Last month</p>
            </div>
            <div className="bottomcol col">
              <a id="atag" onClick={handleShowModal}>
              Show Offers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalPopup  show={showModal} handleClose={handleCloseModal}  children={<BenifitsAvailModal/>}/>
     </>
  )
}
