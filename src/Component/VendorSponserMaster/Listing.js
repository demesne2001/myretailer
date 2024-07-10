import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import 'ag-grid-enterprise';
import { useNavigate } from 'react-router-dom';
import Navbar from '../commoncomponent/Navbar';
import Header from '../commoncomponent/Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../commoncomponent/Footer';


export default function Listing() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = () => {
    setShow(true)
  }

  const navigate = useNavigate();

  function AddButton() {
    return <div className='addbutton'> <button className="fa-solid fa-plus gridaddbutton" onClick={() => handleEdit()} >Add</button> </div>
  }

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },

  ]);

  const EditDeleteButton = (props) => {
    return (
      <>
        <div className='editdelete'>
          <button style={{ width: "auto" }} onClick={() => handleEdit()} className='fa fa-pencil editbtn'></button>
          <button className='fa-solid fa-trash deletebtn' onClick={() => window.alert('clicked')}></button>
        </div>
      </>
    )
  };

  const [colDefs, setColDefs] = useState([
    { field: "", maxWidth: 100, maxWidth: 100, cellRenderer: EditDeleteButton, suppressColumnsToolPanel: true, filter: false, menuTabs: [], sortable: false, headerComponent: AddButton },
    { field: "make" },
    { field: "model" },
    { field: "price", filter: "agNumberColumnFilter", },
    { field: "electric" },

    // { field: "Delete", cellRenderer: DeleteButtonComponent, filter: false }
  ]);

  const sideBar = {
    toolPanels: [
      {
        id: "columns",
        labelDefault: "Columns",
        labelKey: "columns",
        iconKey: "columns",
        toolPanel: "agColumnsToolPanel",
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
          suppressColumnFilter: true,
          suppressColumnSelectAll: true,
          suppressColumnExpandAll: true,
        },
      },
    ],
    defaultToolPanel: "",
  };

  const defaultColDef = {
    minWidth: 200,
    flex: 1,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  }

  const pagination = true;
  const paginationPageSize = 5;
  const paginationPageSizeSelector = [5, 10, 15];


  return (
    <>
      <Navbar></Navbar>
      <section class="home-section">
        <Header ScreenName="Vendor Sponser Master"></Header>

        <Modal show={show} onHide={handleClose} animation={false}>
          <div class="modal-header mstvendor-header">
            <h5 class="modal-title mstvendor-title" id="addModalLabel">Add Vendor Dates</h5>
            <button type="button" class="close mstvendor-close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Modal.Body>
            <div class="modal-body">
              <div class="row">
                <label class="col-sm-4 col-form-label">Select Vendor<span style={{ color: "red" }}>*</span></label>
                <div class="col-sm-8">
                  <select class="form-control" data-val="true" data-val-required="The AddVendorID field is required." id="AddVendorID" name="AddVendorID" style={{ width: "100%" }} required>
                    <option value="">-- Select Vendor --</option>
                    <option value="1020">Ankit Gold</option>
                    <option value="1049">SHREE PARSHWA JEWELLERS</option>
                    <option value="1050">OM JEWELLERS PVT LTD</option>
                    <option value="1292">PARMAR BOOT HOUSE - Branch 2</option>
                    <option value="1293">PARMAR BOOT HOUSE - BRANCH 3</option>
                    <option value="1294">Warehouse</option>
                    <option value="1295">AISHWARYA FASHION COUTURE</option>
                    <option value="1297">BOMAACHI</option>
                    <option value="1298">Shree Nakrani Gold</option>
                    <option value="1299">SHIVALI - ICONIC TREND</option>
                  </select>
                </div>
              </div>
              <div class="fromdate-vendor">
                <label for="editFromDate">From Date<span style={{ color: "red" }}>*</span></label>
                <input type="date" id="addFromDate" placeholder="DD/MM/YYYY" class="datepicker form-control" autocomplete="off" required/>
              </div>

              <div class="todate-vendor">
                <label for="editToDate">To Date<span style={{ color: "red" }}>*</span></label>
                <input type="date" id="addToDate" placeholder="DD/MM/YYYY" class="datepicker form-control" autocomplete="off" required/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} className='btn Custom_btn'>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} className='btn Custom_btn'>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div class="row mb-2" id='daterow'>
          <div class="col-md-12">
            <div class="card card-primary">

              <div class="card-body">
                <div class="vendor-sponser-subheader">
                  <div class="form-group row">
                    <div class="col-md-4 row">
                      <label class="col-md-6">Sponser From Date<span style={{ color: "red" }}>*</span></label>
                      <div class="col-md-6">
                        <input autocomplete="Off" class="form-control hasDatepicker" id="FromDate" name="FromDate" type="date" />
                      </div>
                    </div>
                    <div class="col-md-4 row">
                      <label class="col-md-6" style={{ textAlign: "right" }}>Sponser To Date<span style={{ color: "red" }}>*</span></label>
                      <div class="col-md-6">
                        <input autoComplete="Off" class="form-control" id="ToDate" name="ToDate" type="date" />
                      </div>
                    </div>
                    <div class="col-md-4 row">
                      <div class="col-md-8">
                        <input type="button" value="Go" id="btnGo" class="btn btn-primary vendorsponser-btn goButton" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div class="vendorsponer-card">
          <div id="divContactDetail">
            <div class="card">
              <div class="card-body">
                <div
                  className="ag-theme-custom" // applying the grid theme
                // the grid will fill the size of the parent container
                >
                  <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    domLayout='autoHeight'
                    sideBar={sideBar}
                    onRowDoubleClicked={handleEdit}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                  // statusBar={statusBar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>
        <Footer />
    </>
  )
}
