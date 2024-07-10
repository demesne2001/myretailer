import React, { useState } from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import 'ag-grid-enterprise';
import { useNavigate } from 'react-router-dom';
import Footer from '../commoncomponent/Footer';


function BusinessCategoryListing() {

    const navigate = useNavigate();

    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },

    ]);

    const handleEdit = () => {
        navigate('/BusinessCategoryAddEdit', { replace: true })
    }

    function AddButton() {
        return <div className='addbutton'> <button className="fa-solid fa-plus gridaddbutton" onClick={() => handleEdit()} >Add</button> </div>
    }

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

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "", maxWidth: 100, cellRenderer: EditDeleteButton, suppressColumnsToolPanel: true, filter: false, menuTabs: [], sortable: false, headerComponent: AddButton },
        { field: "make" },
        { field: "model" },
        { field: "price", filter: "agNumberColumnFilter", },
        { field: "electric" },
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
        <div>
            <Navbar></Navbar>
            <section class="home-section">
                <Header ScreenName="Business Category Master"></Header>

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
        </div>
    )
}

export default BusinessCategoryListing
