import React, { useState } from 'react'
import { FaStore } from 'react-icons/fa';
import { cardData } from '../../data/data';
import ModalPopup from '../AllModals/ModalPopup';
import AmtPaidModal from './AmtPaidModal';


export default function AmountPaid(Data) {
    console.log(cardData);
  
 const [showModal, setShowModal] = useState(false);

 
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (  
  <>
    <div className="container mt-4 mb-4">
      <div className="col-md-3">
        <div className="card">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: "start" }}>
              <FaStore size={34} color="gray" />
              <h5 style={{marginTop:'30px'}}>{Data.name}</h5>
            </div>
            <div className="col-md-6">
              <h5>Amount Paid</h5>
              <h3>{Data.amountPaid}</h3>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col">
              <span>+1%</span>
              <p>than Last week</p>
            </div>
            <div className="bottomcol col">
              <a id="atag" onClick={handleShowModal}>
              Get Reciept
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalPopup  show={showModal} handleClose={handleCloseModal} children={<AmtPaidModal />} />
    </>
  );
}
