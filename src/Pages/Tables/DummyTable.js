import React, { useEffect, useState, useRef } from "react";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import "./DummyTable.css";
import { Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import {Grid } from "@mui/material";
import { DownloadTableExcel } from "react-export-table-to-excel";


export default function DummyTable() {

  const tableRef = useRef(null);
  const [show, setShow] = useState(false); // handle open close of modal
  const [myData, setMyData] = useState([]);
  const [myDataFetched, setmyDataFetched] = useState(true); // for the loader
  const [updatedData, setUpdatedData] = useState({name: "", username: "", email: "", phone: "", website: "", }); // form values updation

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };


  const handleclick = (e) =>{
    e.preventDefault();
    axios
    .patch("https://jsonplaceholder.typicode.com/users",updatedData)
    .catch(err=>console.log(err))
    handleClose();
  };


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setMyData(res.data));
    setmyDataFetched(false);
  }, []);

  const handleEdit = (rowData) => {
    setShow(true);
    setUpdatedData(rowData);

  };
  const handleselect =(e)=>{
     console.log(e.rowData)
  }
  const columns = useMemo(
    () => [
      {
           header:'select',
           size:150,
           muiTableBodyCellProps: ({ cell, row }) => ({
            onClick: () => {
              const rowData = row.original;
              console.log(cell.getValue(), cell.id);
              console.log(rowData);
              handleselect(rowData);
            },
          }),
           Cell: ({ cell }) => {
            const row = cell.getValue();
            console.log(row);
            return (
              <span>
            <input type="checkbox" onClick={handleselect}/>
              </span>
            );
          },
           
      },
      
      {
        accessorKey: "id",
        header: "id",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "name",
        size: 150,
      },
      {
        accessorKey: "username",
        header: "username",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "email",
        size: 200,
      },
      {
        accessorKey: "address.city",
        header: "city",
        size: 200,
      },
      {
        accessorKey: "address.suite",
        header: "suite",
        size: 200,
      },
      {
        accessorKey: "address.street",
        header: "street",
        size: 200,
      },
      {
        accessorKey: "address.zipcode",
        header: "zipcode",
        size: 200,
      },
      {
        accessorKey: "address.geo.lat",
        header: "geo.lat",
        size: 150,
      },
      {
        accessorKey: "address.geo.lng",
        header: "geo.lng",
        size: 150,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 150,
      },
      {
        accessorKey: "website",
        header: "website",
        size: 150,
      },
      {
        accessorKey: "company.name",
        header: "companyname",
        size: 150,
      },
      {
        accessorKey: "company.catchPhrase",
        header: "companycatchPhrase",
        size: 150,
      },
      {
        accessorKey: "company.bs",
        header: "companybs",
        size: 150,
      },
      {
        header: "Relevance",
        muiTableBodyCellProps: ({ cell, row }) => ({
          onClick: () => {
            const rowData = row.original;
            console.log(cell.getValue(), cell.id);
            console.log(rowData);
            handleEdit(rowData);
          },
        }),
        size: 40,
        Cell: ({ cell }) => {
          const row = cell.getValue();
          console.log(row);
          return (
            <span>
              <a
                onClick={handleEdit}
                style={{
                  color: "purple",
                  borderBottom: "1px solid purple",
                  cursor: "pointer",
                }}>
                Edit
              </a>
            </span>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <div className="container">
        <div className="row text-end">
        <DownloadTableExcel
          filename="users table"
          sheet="users"
          currentTableRef={tableRef.current}>
          <img  
            src='https://img.freepik.com/premium-vector/microsoft-excel-logo-spreadsheet-program-microsoft-office-365-logotype-microsoft-corporation-software-editorial_661108-17045.jpg?w=360'
            style={{
              height: "40px",
              marginRight: "1rem",
              color: "white",
              backgroundColor: " #681C9A",
              border: "none",
              borderRadius: "6px",
              marginBottom: "3px",
              cursor:'pointer'
            }}
          />
         
        </DownloadTableExcel>
        </div>
        <h3 style={{ color: "#681C9A" }}>Pending Treatment Plans</h3>

        <Grid xs={12}>
          {!myDataFetched ? (
            <MaterialReactTable
              key={myData}
              columns={columns}
              data={myData}
              ref={tableRef}
            />
          ) : (
            <MaterialReactTable
              columns={columns}
              data={[]}
              state={{ showProgressBars: true }}
              ref={tableRef}
              />
          )}
        </Grid>
        {
          <Modal show={show} onHide={handleClose}>
            <Container>
              <Modal.Header closeButton>
                <Modal.Title>Edit the details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
                <Row className="mt-2 mb-2">
                  <label>Name :</label>
                  <input
                    placeholder="name"
                    name="name"
                    value={updatedData.name}
                    className="form-control"
                    onChange={handleChange}
                  />
                </Row>
                <Row className="mt-2 mb-2">
                  <label>Username :</label>
                  <input
                    placeholder="username"
                    name="username"
                    value={updatedData.username}
                    className="form-control"
                    onChange={handleChange}
                  />
                </Row>
                <Row className="mt-2 mb-2">
                  <label>Email :</label>
                  <input
                    placeholder="email"
                    name="email"
                    value={updatedData.email}
                    className="form-control"
                    onChange={handleChange}
                  />
                </Row>
                <Row className="mt-2 mb-2">
                  <label>Phone :</label>
                  <input
                    placeholder="phone"
                    name="phone"
                    value={updatedData.phone}
                    className="form-control"
                    onChange={handleChange}
                  />
                </Row>
                <Row className="mt-2 mb-2">
                  <label>Website :</label>
                  <input
                    placeholder="website"
                    name="website"
                    value={updatedData.website}
                    className="form-control"
                    onChange={handleChange}
                  />
                </Row>
              </Modal.Body>
              <button
                id="paybtn"
                style={{
                  marginBottom: "30px",
                  marginLeft: "15px",
                  width: "130px",
                  height: "35px",
                  color: "white",
                  fontWeight: "500",
                }}
               onClick={handleclick}
              >
                Edit
              </button>
              <button
                id="delbtn"
                style={{
                  marginBottom: "30px",
                  marginLeft: "15px",
                  width: "130px",
                  height: "35px",
                  color: "white",
                  fontWeight: "500",
                  background: "red",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Delete
              </button>
            </Container>
          </Modal>
        }
      </div>
    </>
  );
}
