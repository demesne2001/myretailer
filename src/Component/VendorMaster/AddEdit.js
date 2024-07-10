import React, { useEffect, useState } from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import post from '../Utility/APIHandle';
import API from '../Utility/API';


export default function AddEdit() {


    const vendorID = useLocation().state;

    console.log("vendorrrr", vendorID)

    const [inputparam, setInputparam] = useState(vendorID)

    const [empdata, setEmpdata] = useState(inputparam.lstEmployee);

    const [empcoldata, setempColDefs] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const navigate = useNavigate();

    let openTime = []

    let closeTime = []

    let splitValue = []

    let columnJson = []


    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var fulldays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let workingobj = inputparam.objworkingdays




    for (let index = 0; index < days.length; index++) {
        console.log(workingobj.Mon, 'split')
        splitValue.push({ [days[index]] : workingobj[days[index]]})
        
    }
    
    for (let index = 0; index < splitValue.length; index++) {
        openTime.push(splitValue[index][days[index]].split(' - ')[0])
        closeTime.push(splitValue[index][days[index]].split(' - ')[1])

    }


    const handleCancel = () => {
        navigate('/VendorMaster', { replace: true })
    }

    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },

    ]);


    function AddButton() {
        return <div className='addbutton'> <button className="fa-solid fa-plus gridaddbutton" onClick={() => { setShow(true) }} >Add</button> </div>
    }

    const EditDeleteButton = (props) => {
        return (
            <>
                <div className='editdelete'>
                    <button style={{ width: "auto" }} className='fa fa-pencil editbtn' onClick={() => { setShow(true) }} ></button>
                </div>
            </>
        )
    };

    const defaultempColDef = {
        minWidth: 200,
        minHeight: 400,
        flex: 1,
        filter: "agTextColumnFilter",
        floatingFilter: true,
    }




    columnJson.push({
        field: "",
        maxWidth: 100,
        maxWidth: 100,
        cellRenderer: EditDeleteButton,
        suppressColumnsToolPanel: true,
        filter: false,
        menuTabs: [],
        sortable: false,
        headerComponent: AddButton,
        // rowSpan: params => console.log("paramss", params),
    })
    Object.keys(empdata[0]).forEach((value) => {
        if (value === 'EmployeeName' || value === 'DepartmentName' || value === 'EmpPhoneNo' || value === 'EmpMobileNo' || value === 'EmpWhatsAppNo' || value === 'EmpEMailID' || value === 'EmpAddress' || value === 'UserID' || value === 'IsAllowLogin' || value === 'IsEnableOTPLogin' || value === 'AllowNotification') {
            columnJson.push({ field: value })
            // console.log("value", value)
            // console.log("columnjson", columnJson)
        }
        else {
            columnJson.push({ field: value, hide: true })
        }
    })

    const [colDefs, setColDefs] = useState([
        { field: "", maxWidth: 100, maxWidth: 100, cellRenderer: EditDeleteButton, suppressColumnsToolPanel: true, filter: false, menuTabs: [], sortable: false, headerComponent: AddButton },
        { field: "make" },
        { field: "model" },
        { field: "price", filter: "agNumberColumnFilter", },
        { field: "electric" },
    ]);

    // function handlemodel() {
    //     console.log("hello")
    //     setShow(true)
    // }

    const sideBar = {
        toolPanels: ["columns", "filters"],
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


    function handlefileUpload(event) {
        if (event.target.files && event.target.files[0]) {
            console.log("file", event.target.files, event.target.files[0].size)
            if (event.target.files[0].size > 1 * 1000 * 1024) {
                console.log("File with maximum size of 1MB is allowed");
                // alert("File with maximum size of 1MB is allowed")
                document.getElementsByClassName('UploadAlert')[0].style.display = 'Block'
                document.getElementById('file_id').value = ''
                return false;
            }

            else {
                document.getElementsByClassName('UploadAlert')[0].style.display = 'none'
            }
            // do other operation
        }
    }


    function modelSubmit(e) {
        // e.preventDefault()   
    }


    function handleFieldChange(e) {
        setInputparam({ ...inputparam, [e.target.name]: e.target.value })
    }





    function handlename(e) {

        var alpha = /^(?=.*[a-zA-Z])[a-zA-Z ]*$/
        var firstname = e.target.value;
        let tst = alpha.test(firstname)
        console.log("reg", firstname)
        console.log(tst, 'reg')

        if (firstname === '') {
            document.getElementById(e.target.id).className = "form-control";
            // document.getElementsByClassName('Checkvendor')[0].style.display = 'none'
            return true
        }

        else if (tst === false) {
            // alert('name must contains characters');
            // console.log('regg', firstname)
            document.getElementById(e.target.id).className = "form-control is-invalid";
            // document.getElementsByClassName('Checkvendor')[0].style.display = 'Block'
            return false;
        }

        else {
            document.getElementById(e.target.id).className = "form-control";
            // document.getElementsByClassName('Checkvendor')[0].style.display = 'none'
            return true;
        }
    }


    function handleemail(e) {

        var alpha = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
        var email = e.target.value;
        let tst = alpha.test(email)
        console.log("reg", email)
        console.log(tst, 'reg')

        if (email === '') {
            document.getElementById('EmpEMailID').className = "form-control";
            // document.getElementsByClassName('Checkcode')[0].style.display = 'none'
            return true
        }


        if (tst === false) {
            document.getElementById('EmpEMailID').className = "form-control is-invalid";
            // document.getElementsByClassName('Checkcode')[0].style.display = 'block'
            // document.getElementById('ShortCode').value = ''
            // alert('name must contains characters');
            return false;
        }
        else {
            document.getElementById('EmpEMailID').className = "form-control";
            // document.getElementsByClassName('Checkcode')[0].style.display = 'none'
            return true;
        }
    }



    function handleMobile(e) {
        var alpha = /^(\+\d{1,3}[- ]?)?\d{10}$/
        // var alpha = /^(?=.*[0-9])[0-9+- ]{15}$/
        // var alpha = /^(?=.*[0-9])0-9+- ]{15}$/
        var address = e.target.value;
        let tst = alpha.test(address)
        console.log("reg", address)
        console.log(tst, 'reg')

        if (address === '') {
            document.getElementById(e.target.id).className = "form-control";
            return true
        }


        else if (tst === false) {
            document.getElementById(e.target.id).className = "form-control is-invalid";
            return false;
        }
        else {
            document.getElementById(e.target.id).className = "form-control";
            return true;
        }
    }



    function handleowner(e) {

        var alpha = /^(?=.*[a-zA-Z])[a-zA-Z ]*$/
        var ownername = e.target.value;
        let tst = alpha.test(ownername)
        console.log("reg", ownername)
        console.log(tst, 'reg')

        if (ownername === '') {
            document.getElementById('OwnerName').className = "form-control";
            return true
        }


        else if (tst === false) {
            document.getElementById('OwnerName').className = "form-control is-invalid";
            return false;
        }
        else {
            document.getElementById('OwnerName').className = "form-control";
            return true;
        }
    }

    function handlepwd(e) {

        var alpha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        var passwd = e.target.value;
        let tst = alpha.test(passwd)
        console.log("reg", passwd)
        console.log(tst, 'reg')

        if (passwd === '') {
            document.getElementById('Password').className = "form-control";
            return true
        }


        else if (tst === false) {
            document.getElementById('Password').className = "form-control is-invalid";
            return false;
        }
        else {
            document.getElementById('Password').className = "form-control";
            return true;
        }
    }


    function handlepwdeye() {
        console.log("doc", document.getElementById("Password"))
        if (document.getElementById("Password").type === "text")
            document.getElementById("Password").type = "Password"
        else
            document.getElementById("Password").type = "text"
    }


    const onChangetime = (time, timeString) => {
        console.log('monn',time, timeString);
    };


    function handlelogin(e) {

        var alpha = /^(?=.*[a-zA-Z])[a-zA-Z0-9.\-_$@*/! ]{3,30}$/
        var login = e.target.value;
        let tst = alpha.test(login)
        console.log("reg", login)
        console.log(tst, 'reg')

        if (login === '') {
            document.getElementById('LoginID').className = "form-control";
            return true
        }


        else if (tst === false) {
            document.getElementById('LoginID').className = "form-control is-invalid";
            return false;
        }

        else {
            document.getElementById('LoginID').className = "form-control";
            return true;
        }
    }





    function handletime(e) {

        console.log(document.querySelectorAll(`.${e.target.id}`))

        let timeclass = document.querySelectorAll(`.${e.target.id}`)[0]
        console.log(timeclass.querySelectorAll("input"), 'ttttt')

        console.log(document.querySelectorAll(`.${e.target.id}`)[0].querySelectorAll("input")[0])
        if (e.target.value === 'Open') {
            document.getElementsByClassName(`ant-picker ${e.target.id}`)[0].className = `ant-picker ant-picker-outlined css-dev-only-do-not-override-f7vrd6  ${e.target.id}`
            document.getElementsByClassName(`ant-picker ${e.target.id}`)[1].className = `ant-picker ant-picker-outlined css-dev-only-do-not-override-f7vrd6  ${e.target.id}`
            document.querySelectorAll(`.${e.target.id}`)[0].querySelectorAll("input")[0].disabled = false
            document.querySelectorAll(`.${e.target.id}`)[1].querySelectorAll("input")[0].disabled = false
            document.querySelectorAll(`.${e.target.id}`)[0].querySelectorAll("input")[0].placeholder = 'HH:MM'
            document.querySelectorAll(`.${e.target.id}`)[1].querySelectorAll("input")[0].placeholder = 'HH:MM'
            
        }
        else {
            document.getElementsByClassName(`ant-picker ant-picker-outlined css-dev-only-do-not-override-f7vrd6  ${e.target.id}`)[0].className = `ant-picker ant-picker-disabled ant-picker-outlined css-dev-only-do-not-override-f7vrd6 ${e.target.id}`
            document.getElementsByClassName(`ant-picker ant-picker-outlined css-dev-only-do-not-override-f7vrd6  ${e.target.id}`)[1].className = `ant-picker ant-picker-disabled ant-picker-outlined css-dev-only-do-not-override-f7vrd6 ${e.target.id}`
            document.querySelectorAll(`.${e.target.id}`)[0].querySelectorAll("input")[0].disabled = true
            document.querySelectorAll(`.${e.target.id}`)[1].querySelectorAll("input")[0].disabled = true
            // document.querySelectorAll(`.${e.target.id}`)[0].querySelectorAll("input")[0].placeholder = 'Closed'
            // document.querySelectorAll(`.${e.target.id}`)[1].querySelectorAll("input")[0].placeholder = 'Closed'
 
        }
        console.log("eebnt", e)
        console.log(document.querySelectorAll(`.${e.target.id}`)[0].querySelectorAll("input")[0])
    }
    console.log("show", show)

    return (
        <div>
            <Navbar></Navbar>
            <section class="home-section">
                <Header ScreenName="Vendor Master"></Header>

                <div class="container-fluid">

                     <Modal show={show} onHide={handleClose} animation={false} size="md">

                        <form>
                            <div class="modal-content" style={{ width: "550px" }}>
                                <div class="modal-header mstvendor-header vendor-model">
                                    <h5 class="card-title mstvendor-title vendor-modaltitle">Employee</h5>
                                    <button type="button" class="close mstvendor-close" data-dismiss="modal" aria-label="Close" onclick={handleClose}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div class="modal-body">
                                    <input id="ModelAction" name="ModelAction" type="hidden" value="" />
                                    <input id="EditRowNo" name="EditRowNo" type="hidden" value="" />
                                    <input id="EmployeeID" name="EmployeeID" type="hidden" value="" />
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">Employee Name <span style={{ color: "red" }}>*</span></label>
                                        <div class="col-sm-7">
                                            <input class="form-control IsReqFeild" id="EmployeeName" name="EmployeeName" placeholder="Employee Name" type="text" maxlength="50" onChange={handlename} required />
                                            <Form.Control.Feedback type="invalid">
                                                Enter valid Name!
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">Employee Department <span style={{ color: "red" }}>*</span></label>
                                        <div class="col-sm-7">
                                            <select class="form-control" data-val="true" data-val-required="The EmpDepartmentID field is required." id="EmpDepartmentID" name="EmpDepartmentID" style={{ width: "100%" }}><option value="">-- Select Department --</option>
                                                <option value="1">Administrator</option>
                                                <option value="2">Accounts</option>
                                                <option value="3">Purchase</option>
                                                <option value="4">Order</option>
                                                <option value="5">Sales</option>
                                                <option value="6">HR</option>
                                                <option value="7">Other</option>
                                                <option value="8">Manager</option>
                                                <option value="9">Production</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">Phone No.</label>
                                        <div class="col-sm-7">
                                            <input autocomplete="off" class="form-control" id="EmpPhoneNo" maxLength="15" name="EmpPhoneNo" placeholder="Phone No." type="text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">Mobile No.<span style={{ color: "red" }}>*</span></label>
                                        <div class="col-sm-7">
                                            <input autocomplete="off" class="form-control num" id="EmpMobileNo" maxLength="10" name="EmpMobileNo" placeholder="Mobile No." type="text" onChange={handleMobile} />
                                            <Form.Control.Feedback type="invalid">
                                                Invalid Mobile No.!
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">WhatsApp No.</label>
                                        <div class="col-sm-7">
                                            <input autocomplete="off" class="form-control num" id="EmpWhatsAppNo" maxLength="10" name="EmpWhatsAppNo" placeholder="WhatsApp No." type="text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">E-Mail ID</label>
                                        <div class="col-sm-7">
                                            <input class="form-control" id="EmpEMailID" name="EmpEMailID" placeholder="E-Mail ID" type="text" onChange={handleemail} maxLength="35" />
                                            <Form.Control.Feedback type="invalid">
                                                Invalid Email ID!
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">Address</label>
                                        <div class="col-sm-7">
                                            <textarea class="form-control" id="EmpAddress" name="EmpAddress" row="3">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-5 col-form-label">Login ID<span style={{ color: "red" }}>*</span></label>
                                        <div class="col-sm-7">
                                            <input class="form-control" id="LoginID" name="LoginID" placeholder="Login ID" type="text" onChange={handlelogin} />
                                            <Form.Control.Feedback type="invalid">
                                                Invalid Login ID!
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="allow-vendor">
                                            <label class="col-sm-3 col-form-label pr-0">Allow Login</label>
                                            <div class="alloow-check">
                                                <input data-val="true" data-val-required="The IsAllowLogin field is required." id="IsAllowLogin" name="IsAllowLogin" style={{ Zoom: "2" }} type="checkbox" value="true" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="from-group row">
                                        <label class="col-md-5 col-form-label">Password<span style={{ color: "red" }}>*</span></label>
                                        <div class="col-sm-7">
                                            <input class="form-control form-control-navbar" id="Password" name="Password" placeholder="Password" type="password" onChange={handlepwd} maxLength="16" />
                                            <button class="btn btn-navbar show-password" type="button" onClick={handlepwdeye}>
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <Form.Control.Feedback type="invalid">
                                                Invalid Password! Enter Special characters, digits and alphabets
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="vendor-checkboxmodel mt-3">
                                            <div class="col-md-6">
                                                <div class="vendor-otplogin">
                                                    <label class="col-form-label pr-2">Enable OTP Login</label>
                                                    <div class="alloow-check">
                                                        <input data-val="true" data-val-required="The IsEnableOTPLogin field is required." id="IsEnableOTPLogin" name="IsEnableOTPLogin" style={{ Zoom: "2" }} type="checkbox" value="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="vendor-allownotification">
                                                    <label class="col-form-label pr-2">Allow Notification</label>
                                                    <div class="alloow-check">
                                                        <input data-val="true" data-val-required="The AllowNotification field is required." id="AllowNotification" name="AllowNotification" style={{ Zoom: "2" }} type="checkbox" value="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" id="btnClosePopup" class="btn Custom_btn" data-dismiss="modal" onClick={()=>{setShow(false)}}>Close</button>
                                    <button type="submit" class="btn Custom_btn" onClick={modelSubmit} >OK</button>
                                </div>
                            </div>
                        </form>
                    </Modal>

                    <form name='vendorForm' >
                        <section class="content-header">
                            <section class="">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Vendor Logo</h3>
                                            </div>
                                            <div class="card-body" style={{ marginTop: "92px" }}>
                                                <div class="form-group vendortitle">
                                                    <label>Vendor Logo</label>
                                                    <div class="input-group">
                                                        <div class="custom-file col-sm-6">
                                                            <input onChange={handlefileUpload} id="file_id" type="file" name="file_name" accept="image/*" />
                                                        </div>
                                                        <div class="filtr-item compony_Logo_image" style={{ height: "136px", width: "38%" }}>
                                                            <input id="VendorLogoImageName" name="VendorLogoImageName" type="hidden" value="" />
                                                            <img id="imgCompLogo" src={inputparam.VendorLogoImageName} class="img-fluid mb-1" alt="Company Logo" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='UploadAlert'>File with maximum size of 1MB is allowed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Vendor Details</h3>
                                            </div>
                                            <div class="card-body vendor_details_text">
                                                <div class="from-group row">
                                                    <div class="col-md-12 row">
                                                        <label class="col-md-3">Vendor Name <span style={{ color: "red" }}>*</span></label>
                                                        <div class="col-md-9">
                                                            <input class="form-control disabled-rights" id="VendorName" value={inputparam.VendorName} maxlength="50" name="VendorName" placeholder="Vendor Name" title="Vendor Name" type="text" onChange={handleFieldChange} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Enter Valid VendorName , it contains only characters
                                                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="from-group row mt-3">
                                                    <div class="col-md-12 row">
                                                        <label class="col-md-3">Vendor Code</label>
                                                        <div class="col-md-3">
                                                            <b>{inputparam.VendorCode}</b>
                                                        </div>
                                                        <label class="col-md-3">Vendor ID</label>
                                                        <div class="col-md-3">
                                                            <b>{inputparam.VendorID}</b>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="from-group row mt-3">
                                                    <div class="col-md-12 row">
                                                        <label class="col-md-3">Token No</label>
                                                        <div class="col-md-9">
                                                            <b>{inputparam.TokenNo}</b>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="from-group row">
                                                    <div class="col-md-12 row mt-2">
                                                        <label class="col-md-3">Short Code<span style={{ color: "red" }}>*</span></label>
                                                        <div class="col-md-9">
                                                            <input class="form-control" id="ShortCode" value={inputparam.ShortCode} maxlength="5" onChange={handleFieldChange} name="ShortCode" placeholder="Short Code" title="Short Code" type="text" required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Enter Valid ShortCode
                                                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Contact Address</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">Category<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-md-9">
                                                        <select class="form-control select2bs4" data-val="true" data-val-required="The BusinessCategoryID field is required." id="BusinessCategoryID" name="BusinessCategoryID" style={{ width: "100%" }} required ><option value="">-- Select Categoty --</option>
                                                            <option value="2">Jewellery</option>
                                                            <option value="3">Footwear</option>
                                                            <option value="4">Watch</option>
                                                            <option value="5">Groceries and Dryfruits</option>
                                                            <option value="6">Garment</option>
                                                            <option value="7">Fashion Apparels</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">Address 1<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-md-9">
                                                        <input class="form-control" id="Address1" value={inputparam.Address1} onChange={handleFieldChange} maxlength="60" name="Address1" placeholder="Address 1" title="Address 1" type="text" required />
                                                        <Form.Control.Feedback type="invalid">
                                                            Enter Valid Address
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">Address 2<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-md-9">
                                                        <input class="form-control" id="Address2" value={inputparam.Address2} onChange={handleFieldChange} maxlength="60" name="Address2" placeholder="Address 2" title="Address 2" type="text" required />
                                                        <Form.Control.Feedback type="invalid">
                                                            Enter Valid Address
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">Area<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-md-9">
                                                        <input class="form-control" id="AddressArea" maxlength="60" name="AddressArea" onChange={handleFieldChange} placeholder="Area Name" title="Area Name" type="text" value={inputparam.AddressArea} required />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">City<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-md-3">
                                                        <select class="form-control select2bs4" data-val="true" data-val-required="The CityID field is required." id="CityID" name="CityID" onChange={handleFieldChange} style={{ width: "100%" }} required>
                                                            <option value="">-- Select City --</option>
                                                            {inputparam.lstmstCity.map((res) => {
                                                                return inputparam.CityID === res.CityID ? <option selected value={res.CityID}>{res.CityName}</option> : <option value={res.CityID}>{res.CityName}</option>
                                                            })}
                                                            {/* <option selected="selected" value="2">Ahmedabad</option>
                                                            <option value="3">Pune</option>
                                                            <option value="4">Jodhpur</option>
                                                            <option value="6">Baroda</option>
                                                            <option value="8">SURAT</option>
                                                            <option value="11">Ambaji</option>
                                                            <option value="24">Becharaji</option>
                                                            <option value="63">GANDHI NAGAR</option>
                                                            <option value="89">KALOL</option>
                                                            <option value="90">Kapadvanj</option>
                                                            <option value="2395">Mumbai</option> */}
                                                        </select>
                                                    </div>

                                                    <label class="col-md-3 col-form-label">Pin Code</label>
                                                    <div class="col-md-3">
                                                        <input class="form-control" id="PinCode" maxLength="6" value={inputparam.PinCode} onChange={handleFieldChange} name="PinCode" onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57" placeholder="Pin Code" style={{ textAlign: "right" }} type="text" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">State</label>
                                                    <div class="col-md-3">
                                                        <select class="form-control" data-val="true" data-val-required="The StateID field is required." onChange={handleFieldChange} disabled="disabled" id="StateID" name="StateID" style={{ width: "100%" }}>
                                                            <option value="">-- Select State --</option>
                                                            <option value="1">Andaman &amp; Nicobar Islands</option>
                                                            <option value="2">Andhra Pradesh</option>
                                                            <option value="4">Arunachal Pradesh</option>
                                                            <option value="5">Assam</option>
                                                            <option value="6">Bihar</option>
                                                            <option value="7">Chandigarh</option>
                                                            <option value="8">Chhattisgarh</option>
                                                            <option value="9">Dadra &amp; Nagar Haveli</option>
                                                            <option value="10">Daman &amp; Diu</option>
                                                            <option value="11">Delhi</option>
                                                            <option value="12">Goa</option>
                                                            <option selected="selected" value="13">Gujarat</option>
                                                            <option value="14">Haryana</option>
                                                            <option value="15">Himachal Pradesh</option>
                                                            <option value="16">Jammu &amp; Kashmir</option>
                                                            <option value="17">Jharkhand</option>
                                                            <option value="18">Karnataka</option>
                                                            <option value="19">Kerala</option>
                                                            <option value="20">Lakshdweep</option>
                                                            <option value="21">Madhya Pradesh</option>
                                                            <option value="22">Maharashtra</option>
                                                            <option value="23">Manipur</option>
                                                            <option value="24">Meghalaya</option>
                                                            <option value="25">Mizoram</option>
                                                            <option value="26">Nagaland</option>
                                                            <option value="27">Odisha</option>
                                                            <option value="38">Other Territory</option>
                                                            <option value="28">Pondicherry</option>
                                                            <option value="29">Punjab</option>
                                                            <option value="30">Rajasthan</option>
                                                            <option value="31">Sikkim</option>
                                                            <option value="32">Tamil Nadu</option>
                                                            <option value="33">Telangana</option>
                                                            <option value="34">Tripura</option>
                                                            <option value="35">Uttar Pradesh</option>
                                                            <option value="36">Uttarakhand</option>
                                                            <option value="37">West Bengal</option>
                                                        </select>
                                                    </div>
                                                    <label class="col-md-3 col-form-label">Country</label>
                                                    <div class="col-md-3">
                                                        <select class="form-control" data-val="true" onChange={handleFieldChange} data-val-required="The CountryID field is required." disabled="disabled" id="CountryID" name="CountryID" style={{ width: "100%" }}>
                                                            <option value="">-- Select Country --</option>
                                                            <option selected="selected" value="1">India</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Contact Information</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Owner Name<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-sm-9">
                                                        <input class="form-control" id="OwnerName" maxlength="30" value={inputparam.OwnerName} name="OwnerName" placeholder="Owner Name" title="Owner Name" type="text" onChange={handleFieldChange} required />
                                                        <Form.Control.Feedback type="invalid">
                                                            name must contains characters
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Owner Mobile<span style={{ color: "red" }}>*</span></label>
                                                    <div class="col-sm-9">
                                                        <input autocomplete="off" class="form-control digits" value={inputparam.OwnerMobileNo} onChange={handleFieldChange} id="OwnerMobileNo" maxLength="10" data-mask="0000000000" name="OwnerMobileNo" placeholder="Owner Mobile No." style={{ textAlign: "right" }} title="Owner Mobile No." type="text" required />
                                                        <Form.Control.Feedback type="invalid">
                                                            Enter Valid Mobile no.
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Phone No.</label>
                                                    <div class="col-sm-9">
                                                        <input autocomplete="off" class="form-control" value={inputparam.PhoneNo} id="PhoneNo" onChange={handleFieldChange} maxLength="10" name="PhoneNo" data-mask="0000000000" placeholder="Phone No." style={{ textAlign: "right" }} title="Phone No." type="text" />
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">PAN No.</label>
                                                    <div class="col-md-3">
                                                        <input class="form-control UpperCase" value={inputparam.PANNo} id="PANNo" onChange={handleFieldChange} maxlength="10" name="PANNo" placeholder="PAN No." style={{ textTransform: "uppercase" }} title="PAN No." type="text" />
                                                    </div>
                                                    <label class="col-md-2 col-form-label">GST No.</label>
                                                    <div class="col-md-4">
                                                        <input class="form-control UpperCase" value={inputparam.GSTNo} id="GSTNo" onChange={handleFieldChange} maxlength="15" name="GSTNo" placeholder="GST No." style={{ textTransform: "uppercase" }} title="GST No." type="text" />
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <label class="col-sm-3 col-form-label">Com. E-Mail ID</label>
                                                    <div class="col-sm-9">
                                                        <input autocomplete="off" class="form-control digits" value={inputparam.CompanyEmailID} onChange={handleFieldChange} id="CompanyEmailID" maxlength="75" name="CompanyEmailID" placeholder="Company E-Mail ID" title="Company E-Mail ID" type="text" />
                                                        <Form.Control.Feedback type="invalid">
                                                            Enter Valid Email ID!
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <label class="col-sm-3 col-form-label">Com. Web Site</label>
                                                    <div class="col-sm-9">
                                                        <input autocomplete="off" class="form-control digits" value={inputparam.CompanyWebsite} id="CompanyWebsite" onChange={handleFieldChange} maxlength="75" name="CompanyWebsite" placeholder="Company Web Site" title="Company Web Site" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Google MAP Information</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Map Address</label>
                                                    <div class="col-sm-9">
                                                        <input class="form-control" id="MapAddress" value={inputparam.MapAddress} onChange={handleFieldChange} maxlength="300" name="MapAddress" placeholder="Map Address" title="Map Address" type="text" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Latitude </label>
                                                    <div class="col-sm-3">
                                                        <input autocomplete="off" class="form-control" value={inputparam.Latitude} id="Latitude" onChange={handleFieldChange} maxLength="20" name="Latitude" placeholder="Latitude" style={{ textAlignlign: "right", textTransform: "uppercase" }} title="Latitude" type="text" />
                                                    </div>

                                                    <label class="col-sm-3 col-form-label" style={{ textAlign: "right" }}>Longitude </label>
                                                    <div class="col-sm-3">
                                                        <input autocomplete="off" value={inputparam.Longitude} class="form-control UpperCase" id="Longitude" onChange={handleFieldChange} maxLength="20" name="Longitude" placeholder="Longitude" style={{ textAlignlign: "right", textTransform: "uppercase" }} title="Longitude" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info card-offertext">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Offer Text</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="col-md-12">
                                                    <textarea class="form-control" id="OfferText" value={inputparam.OfferText} onChange={handleFieldChange} maxLength="150" name="OfferText" placeholder="Offer Text" rows="4" title="Offer Text">
                                                        Extra 10% off on </textarea>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info card-about mb-4">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">About</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="col-md-12">
                                                    {/* <!-- Summernote Editor --> */}
                                                    {/* <div id="summernoteEditor" class="form-control"></div> */}
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        config={{
                                                            toolbar: [
                                                                'undo', 'redo', '|',
                                                                'heading', '|', 'bold', 'italic', '|',
                                                                'link', 'insertTable', 'mediaEmbed', '|',
                                                                'bulletedList', 'numberedList', 'indent', 'outdent'
                                                            ],
                                                            plugins: [
                                                                Bold,
                                                                Essentials,
                                                                Heading,
                                                                Indent,
                                                                IndentBlock,
                                                                Italic,
                                                                Link,
                                                                List,
                                                                MediaEmbed,
                                                                Paragraph,
                                                                Table,
                                                                Undo
                                                            ],
                                                            initialData: inputparam.About,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <div class="card card-info card-about mb-4">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Referral Program</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="row form-group">
                                                    <label class="col-sm-3 col-form-label">Referral Type</label>
                                                    <div class="col-sm-9">
                                                        <select class="form-control" data-val="true" onChange={handleFieldChange} data-val-required="The ReferralTypeID field is required." id="objReferrel_ReferralTypeID" name="objReferrel.ReferralTypeID" style={{ width: "100%" }}>
                                                            <option value="">-- Select Lotalty --</option>
                                                            <option selected="selected" value="1">LoyaltyPoint</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <label class="col-sm-3 col-form-label">Loyalty Points</label>
                                                    <div class="col-sm-9">
                                                        <input autocomplete="off" class="form-control num" value={inputparam.objReferrel.LoyaltyPoints} onChange={handleFieldChange} data-val="true" data-val-number="The field LoyaltyPoints must be a number." data-val-required="The LoyaltyPoints field is required." id="objReferrel_LoyaltyPoints" maxLength="20" name="objReferrel.LoyaltyPoints" placeholder="LoyaltyPoints" style={{ textAlign: "right" }} title="LoyaltyPoints" type="text" data-mask="0000000000" />
                            
                                                    </div>
                                                </div>
                                                <div class="from-group row mt-3">
                                                    <div class="col-md-12 row">
                                                        <label class="col-md-3 col-form-label">Referral Link</label>
                                                        <div class="col-md-9">
                                                            <b id="objReferrel_ReferralLink1">https://myretailers.page.link/CpBmYHmx3196dTgh7</b>

                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="hidden" id="objReferrel_ReferralLinkCopy" value={inputparam.objReferrel.ReferralLink} />
                                                            <button class="ml-2 Custom_btn mr-0" onclick="copyToClipboard()" type="button">Copy Link</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="divEmployeeDetail" class="col-md-12 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header mb-0">
                                                <h3 class="card-title vendor-title mb-0">Employees</h3>

                                            </div>
                                            <div class="card-body">
                                                <div
                                                    className="ag-theme-custom" id='employee-grid'

                                                >
                                                    <AgGridReact
                                                        rowData={empdata}
                                                        columnDefs={columnJson}
                                                        defaultColDef={defaultempColDef}
                                                        domLayout='autoHeight'
                                                        sideBar={sideBar}
                                                        onRowDoubleClicked={() => setShow(true)}
                                                        pagination={pagination}
                                                        paginationPageSize={paginationPageSize}
                                                        paginationPageSizeSelector={paginationPageSizeSelector}
                                                    // statusBar={statusBar}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 mb-3">
                                        <div class="card card-info">
                                            <div class="card-header vendor-header">
                                                <h3 class="card-title vendor-title mb-0">Shop Open / Close Time</h3>
                                            </div>
                                            <div class="card-body">
                                                <div id="daysContainer"></div>
                                                <div class="card-body">
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td><b>Days</b></td>
                                                                <td><b>OpenTime</b></td>
                                                                <td><b>CloseTime</b></td>
                                                                <td><b>Status</b></td>
                                                            </tr>


                                                            {days.map((res, keys) => {
                                                                // dayjs.extend(customParseFormat)
                                                                return (
                                                                    <tr>
                                                                        <td><b>{res}</b></td>
                                                                        <td> {openTime[keys] === 'Closed' ? <TimePicker use12Hours format="h:mm a" onChange={onChangetime} placeholder='Closed' className={res}  disabled={true}/> : <TimePicker use12Hours format="h:mm a" onChange={onChangetime} placeholder='HH:MM' className={res} defaultValue={dayjs(openTime[keys], 'h:mm a')} />}      </td>
                                                                        <td> {closeTime[keys] === 'Closed' ? <TimePicker use12Hours format="h:mm a" onChange={onChangetime} placeholder='Closed' className={res} disabled={true} /> : <TimePicker use12Hours format="h:mm a" onChange={onChangetime} placeholder='HH:MM' className={res} defaultValue={dayjs(closeTime[keys], 'h:mm a')} />}  </td>
                                                                        <td>
                                                                            <select class="form-select shop-status timepicker" id={res} onChange={handletime}>
                                                                                <option value="Open">Open</option>
                                                                                {/* <option value="Closed">Closed</option> */}
                                                                                {openTime[keys] === 'Closed' ? <option value="Closed" selected>Closed</option> : <option value="Closed">Closed</option> }
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        {/* <input name="__RequestVerificationToken" type="hidden" value="CfDJ8OIgDDyuXyVJh3-a4OmbMpoTEwH3b0f5Ezue8609JHgt6YYUNSpp0FjVwzade2kXWzU3-D_IeXejo24PaA_PGYtv5wVFgovrhHYcW2YLfq2YP8uAexOyrt9yqYZRDOZoWiRfFcyovTyjqeVI0wWRZR8" /><input name="IsAllowLogin" type="hidden" value="false" /><input name="IsEnableOTPLogin" type="hidden" value="false" /><input name="AllowNotification" type="hidden" value="false" /><input name="IsActive" type="hidden" value="false" /> */}


                        <footer class="main-footer Custome_bottom-Footer d-flex justify-content-between ">
                            <div class="d-flex active_btn active_footer_btn">
                                <label>Active</label>
                                <div class="check-box ml-2">
                                    <input class="disabled-rights" data-val="true" data-val-required="The IsActive field is required." id="IsActive" name="IsActive" style={{ Zoom: "2" }} type="checkbox" />
                                </div>
                            </div>
                            <div class="float-right foot_button">
                                <input type="button" id="btnContidue" value="Save & Continue" class="btn Custom_btn" />
                                <input type="submit" id="btnSubmit" value="Submit" class="btn Custom_btn" />
                                <button class="btn Custom_btn" onClick={() => handleCancel()}>Cancel</button>
                            </div>
                        </footer>
                    </form>
                </div>
            </section>
        </div>
    )
}
