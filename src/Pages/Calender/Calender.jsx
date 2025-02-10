import React, { useState } from 'react'
import { Badge,Calendar } from 'antd';
import { Modal } from 'react-bootstrap';
import Header from '../../components/Navbar/Header/Header';
import Footer from '../../components/Footer/Footer';


const getListData = (value) => {
    let listData = []; // Specify the type of listData
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
          {
            type: 'error',
            content: 'This is error event.',
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event',
          },
          {
            type: 'success',
            content: 'This is very long usual event......',
          },
          {
            type: 'error',
            content: 'This is error event 1.',
          },
          {
            type: 'error',
            content: 'This is error event 2.',
          },
          {
            type: 'error',
            content: 'This is error event 3.',
          },
          {
            type: 'error',
            content: 'This is error event 4.',
          },
        ];
        break;
      default:
    }
    return listData || [];
  };


export default function Calender() {
    const[show,setShow]=useState(false);

    const handleClick =(e)=>{
      setShow(true);
    }
    const handleClose =(e)=>{
        setShow(false);
    }
      const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      };
      const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} onClick={handleClick}/>
              </li>
            ))}
          </ul>
        );
      };
      const getMonthData = (value) => {
        if (value.month() === 8) {
          return 1394;
        }
      };
      const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
      };
  return (<><div>
    <Header/>
  </div>
    <div className='container'>
       <Calendar cellRender={cellRender} />;
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Today's Events are</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>...........</p>
        <p>Appointment with .........</p>
        <p>Appointment with .........</p>
      </Modal.Body>
    </Modal> 
    <Footer/>
    </>
  )
}
