import React, { useState } from "react";
import { VscGraphLine } from "react-icons/vsc";
import { cardData } from "../../data/data";

import ModalPopup from "../AllModals/ModalPopup";
import TotalExpenseModal from "./TotalExpenseModal";


export default function TotalExpenses(Data) {
  const [showModal, setShowModal] = useState(false);

 
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (<>
    <div className="container mt-4 mb-4">
      <div className="col-md-3">
        <div className="card">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: "start" }}>
              <VscGraphLine size={34} color="pink" />
              <h5 style={{marginTop:'30px'}}>{Data.name}</h5>
            </div>
            <div className="col-md-6">
              <h5>Total Expenses</h5>
              <h3>{Data.totalexpense}</h3>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col">
              <span>+3</span>
              <p>just updated</p>
            </div>
            <div className="bottomcol col">
              <a id="atag" onClick={handleShowModal}> Total Cost </a>
            </div>
          </div>
        </div>
      </div>
    </div>

               <ModalPopup  show={showModal} handleClose={handleCloseModal} children={<TotalExpenseModal/>}/>

    </>
  );
}
