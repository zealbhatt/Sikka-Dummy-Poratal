import React, { Children, useState } from "react";
import { MdSpaceDashboard } from 'react-icons/md';
import { cardData } from "../../data/data";
import ModalPopup from "../AllModals/ModalPopup";
import AmtDueModal from "./AmtDueModal";

export default function AmountDueCard(Data) {
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
                <MdSpaceDashboard size={34} color="gray" />
                <h5 style={{marginTop:'30px'}}>{Data.name}</h5>
              </div>
              <div className="col-md-6">
                <h5>Amount Due</h5>
                <h3>{Data.dueamount}</h3>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col">
                <span>+205$</span>
                <p>than Last week</p>
              </div>
              <div className="bottomcol col">
                <a id="atag" onClick={handleShowModal}>
                  Amount Due
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
         <ModalPopup  show={showModal} handleClose={handleCloseModal}  children ={<AmtDueModal/>} />
    </>
  );
}
