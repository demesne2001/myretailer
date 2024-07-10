import React, { useState } from 'react'
import Header from '../commoncomponent/Header'
import Navbar from '../commoncomponent/Navbar'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import 'ag-grid-enterprise';
import { useNavigate } from 'react-router-dom';
import Footer from '../commoncomponent/Footer';


export default function SchemeListing() {

    const navigate = useNavigate();

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

    // function AddButton() {
    //     return <div className='addbutton'> <button className="fa-solid fa-plus gridaddbutton" onClick={() => handleEdit()} >Add</button> </div>
    // }

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price", filter: "agNumberColumnFilter", },
        { field: "electric" },
        { field: "", maxWidth: 100, cellRenderer: EditDeleteButton, suppressColumnsToolPanel: true, filter: false, menuTabs: [], sortable: false },
    ]);

    const handleEdit = () => {
        navigate('/SchemeMaster', { replace: true })
    }

    const sideBar = {
        toolPanels: ["columns", "filters"],
        defaultToolPanel: "",
    };

    const defaultColDef = {
        flex: 1,
        filter: "agTextColumnFilter",
        floatingFilter: true,
    }

    const pagination = true;
    const paginationPageSize = 5;
    const paginationPageSizeSelector = [5, 10, 15];


    return (
        <div>
            <Navbar></Navbar>
            <section class="home-section">
                <Header ScreenName="Scheme Master"></Header>

                <div class="vendorsponer-card">
                    <div id="divContactDetail">
                        <div class="card">
                            <div class="card-body">
                                <div
                                    className="ag-theme-custom" // applying the grid theme
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

        </div>
    )
}
