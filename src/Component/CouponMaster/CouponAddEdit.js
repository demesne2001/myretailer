import React, { useState } from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { TimePicker } from 'antd';

export default function CouponAddEdit() {


    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/CouponMaster', { replace: true })
    }

    function handlefileUpload(event) {
        if (event.target.files && event.target.files[0]) {
            console.log("file", event.target.files, event.target.files[0].size)
            if (event.target.files[0].size > 1 * 1000 * 1024) {
                console.log("File with maximum size of 1MB is allowed");
                // alert("File with maximum size of 1MB is allowed")
                document.getElementsByClassName('UploadAlert')[0].style.display = 'Block'
                document.getElementById('chooseFile').value = ''
                return false;
            }

            else {
                document.getElementsByClassName('UploadAlert')[0].style.display = 'none'
            }
            // do other operation
        }
    }


    const onChangetime = (time, timeString) => {
        console.log(time, timeString);
    };

    function handlename(e) {

        var alpha = /^(?=.*[a-zA-Z])[a-zA-Z ]*$/
        var firstname = e.target.value;
        let tst = alpha.test(firstname)
        console.log("reg", firstname)
        console.log(tst, 'reg')

        if (firstname === '') {
            document.getElementById('CouponName').className = "form-control";
            // document.getElementsByClassName('Checkvendor')[0].style.display = 'none'
            return true
        }

        else if (tst === false) {
            // alert('name must contains characters');
            // console.log('regg', firstname)
            document.getElementById('CouponName').className = "form-control is-invalid";
            // document.getElementsByClassName('Checkvendor')[0].style.display = 'Block'
            return false;
        }

        else {
            document.getElementById('CouponName').className = "form-control";
            // document.getElementsByClassName('Checkvendor')[0].style.display = 'none'
            return true;
        }

    }


    function handleSubmit(e) {

        // e.preventDefault();

        console.log("e", e)

        // setflagSubmit(true)

        // let regex = /^\d{0,4}$/

        // var useLimit = document.getElementById('NoOfUseLimit').value;
        // console.log("login", useLimit)
        // let tst = regex.test(useLimit)
        // console.log("reg", useLimit)
        // console.log(tst, 'reg')

        // if (useLimit === '') {
        //     document.getElementById('NoOfUseLimit').className = "form-control";
        //     return true
        // }


        // else if (tst === false) {
        //     document.getElementById('NoOfUseLimit').className = "form-control is-invalid";
        //     return false;
        // }

        // else {
        //     document.getElementById('NoOfUseLimit').className = "form-control";
        //     return true;
        // }

    }


    return (
        <div>
            <Navbar></Navbar>
            <section class="home-section">
                <Header ScreenName="Coupon Master"></Header>
                <div class="container-fluid">
                    {/* <Form noValidate validated={flagSubmit} onSubmit={handleSubmit}> */}
                    <form>
                        {/* <input id="strMessageCode" name="strMessageCode"
                        type="hidden" value="" />
                        <input id="strMessage" name="strMessage" type="hidden" value="" />
                        <input
                            id="strAction" name="strAction" type="hidden" value="" /><input data-val="true"
                                data-val-required="The CouponID field is required." id="CouponID" name="CouponID" type="hidden"
                            value="11" /> */}

                        <section class="content-header">
                            <div class="submaster-topheader">
                            </div>
                            <section class="">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card card-primary devcard">
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Coupon Type<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Select aria-label="Default select example" required>
                                                                    <option value="">-- Select coupon Type --</option>
                                                                    <option selected="selected" value="1">Coupon</option>
                                                                    <option value="2">CashGiftVoucher</option>
                                                                </Form.Select>
                                                                {/* <select class="form-control disabled" data-val="true"
                                                                    data-val-required="The CouponTypeID field is required."
                                                                    id="CouponTypeID" name="CouponTypeID" style={{ width: "100%" }} required>
                                                                    <option value="">-- Select coupon Type --</option>
                                                                    <option selected="selected" value="1">Coupon</option>
                                                                    <option value="2">CashGiftVoucher</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Coupon Name<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="CouponName" name="CouponName" type="text" placeholder="Coupon Name" onChange={handlename} required />
                                                                <Form.Control.Feedback type="invalid">
                                                                    Enter valid Name!
                                                                </Form.Control.Feedback>
                                                                {/* <input class="form-control" id="CouponName" name="CouponName"
                                                                    placeholder="CouponName" title="CouponName" type="text"
                                                                    required /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Valid From Date<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <input
                                                                    class="form-control datetimepicker-input text-box single-line"
                                                                    data-val="true"
                                                                    data-val-required="The ValidFromDate field is required."
                                                                    id="ValidFromDate" max="2024-06-25" min="1799-07-22"
                                                                    name="ValidFromDate" type="date" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Valid To Date<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <input
                                                                    class="form-control datetimepicker-input text-box single-line"
                                                                    data-val="true"
                                                                    data-val-required="The ValidToDate field is required."
                                                                    id="ValidToDate" min="1799-07-22" name="ValidToDate"
                                                                    type="date" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Valid From Time</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <TimePicker use12Hours format="h:mm a" onChange={onChangetime} placeholder='HH:MM' className='form-control datetimepicker-input text-box single-line' id="ValidFromTime" name="ValidFromTime" />
                                                                {/* <input
                                                                    class="form-control datetimepicker-input text-box single-line"
                                                                    id="ValidFromTime" name="ValidFromTime" type="time"
                                                                    value="" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Valid To Time</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <TimePicker use12Hours format="h:mm a" onChange={onChangetime} placeholder='HH:MM' className='form-control datetimepicker-input text-box single-line' id="ValidToTime" name="ValidToTime" />
                                                                {/* <input
                                                                    class="form-control datetimepicker-input text-box single-line"
                                                                    id="ValidToTime" name="ValidToTime" type="time" value="" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Min Bill Amount</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="MinBillAmt" name="MinBillAmt" type="text" maxLength={30} style={{ textAlign: "right" }} data-mask="0000000000" placeholder="Min Bill Amt" required />
                                                                {/* <input class="form-control num2" data-val="true"
                                                                    data-val-number="The field MinBillAmt must be a number."
                                                                    data-val-required="The MinBillAmt field is required."
                                                                    id="MinBillAmt" name="MinBillAmt" placeholder="MinBillAmt"
                                                                    style={{ textAlign: "right" }} title="MinBillAmt" type="text"
                                                                /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Target Customer<span style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Select aria-label="Default select example" name='TargetCustomerType' required>
                                                                    <option value="A">Any Customer</option>
                                                                    <option selected="selected" value="S">Only Selected Customer</option>
                                                                </Form.Select>
                                                                {/* <select class="form-control" id="TargetCustomerType"
                                                                    name="TargetCustomerType" onfocus="$(this).click()"
                                                                    style={{ width: "100%" }} required>
                                                                    <option value="A">Any Customer</option>
                                                                    <option selected="selected" value="S">Only Selected Customer
                                                                    </option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Coupon Code Generate Type<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Select aria-label="Default select example" name='CouponCodeGenType' required>
                                                                    <option value="">-- Select coupon Type --</option>
                                                                    <option value="C">Common Coupon Code</option>
                                                                    <option selected="selected" value="D">Unique for each customers</option>
                                                                </Form.Select>
                                                                {/* <select class="form-control disabled" id="CouponCodeGenType"
                                                                    name="CouponCodeGenType" style={{ width: "100%" }} required>
                                                                    <option value="">-- Select coupon Type --</option>
                                                                    <option value="C">Common Coupon Code</option>
                                                                    <option selected="selected" value="D">Unique for each
                                                                        customers</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12 CouponCode">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0" id="CouponCode2">Coupon Code
                                                                    <span style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="CouponCode" name="CouponCode" type="text" placeholder="Coupon Code" maxlength='15' required />
                                                                {/* <input class="form-control IsReqFeild UpperCase disabled"
                                                                    id="CouponCode" maxlength="15" name="CouponCode"
                                                                    placeholder="CouponCode" title="CouponName" type="text"
                                                                    required /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">No Of Coupon Use Limit<span style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="NoOfUseLimit" name="NoOfUseLimit" type="text" style={{ textAlign: "right" }} data-mask="0000" placeholder="No Of Use Limit" maxLength={4} required />
                                                                {/* <input class="form-control num" data-val="true"
                                                                    data-val-required="The NoOfUseLimit field is required."
                                                                    id="NoOfUseLimit" maxlength="4" name="NoOfUseLimit"
                                                                    placeholder="No Of Use Limit" style={{ textAlign: "right" }}
                                                                    title="NoOfUseLimit" type="text" required /> */}
                                                                

                                                                {/* <Form.Control.Feedback type="invalid">
                                                                    Invalid Coupon Limit!
                                                                </Form.Control.Feedback> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Per Customer Use Limit<span style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="PerCustomerUseLimit" name="PerCustomerUseLimit" type="text" style={{ textAlign: "right" }} data-mask="0000" placeholder="Per Customer Use Limit" maxlength='4' pattern="[0-9]{0,4}" required />
                                                                {/* <input class="form-control num " data-val="true"
                                                                    data-val-required="The PerCustomerUseLimit field is required."
                                                                    id="PerCustomerUseLimit" maxlength="4"
                                                                    name="PerCustomerUseLimit" placeholder="Per Customer Use Limit"
                                                                    style={{ textAlign: "right" }} title="PerCustomerUseLimit"
                                                                    type="text" required /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group  coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="label-name">Valid On Products</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <textarea class="form-control" id="ValidOnProducts"
                                                                    name="ValidOnProducts" placeholder="Valid On Products"
                                                                    title="Valid On Products">
                                                                </textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12 ">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Discount Type<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Select aria-label="Default select example" name='CouponCodeGenType' required>
                                                                    <option selected="selected" value="P">Percentage(%)</option>
                                                                    <option value="A">Amount(rs)</option>
                                                                </Form.Select>
                                                                {/* <select class="form-control" id="DiscountType"
                                                                    name="DiscountType" style={{ width: "100%" }} required>
                                                                    <option selected="selected" value="P">Percentage(%)
                                                                    </option>
                                                                    <option value="A">Amount(rs)</option>
                                                                </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12 DiscPr">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Discount Percentage % <span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="DiscPrc" name="DiscPrc" type="text" data-mask="000000" style={{ textAlign: "right" }} placeholder="DiscPrc" maxLength={6} required />
                                                                {/* <input class="form-control num2" data-val="true"
                                                                    data-val-number="The field DiscPrc must be a number."
                                                                    data-val-required="The DiscPrc field is required."
                                                                    id="DiscPrc" maxlength="6" name="DiscPrc"
                                                                    placeholder="DiscPrc" style={{ textAlign: "right" }}
                                                                    title="DiscPrc" type="text" required /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="col-lg-4 col-md-6 col-sm-12 DiscAmount" style={{ display: "none" }}>
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Discount Amount<span
                                                                    style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="DiscAmt" name="DiscAmt" type="text" style={{ textAlign: "right" }} placeholder="DiscAmt" maxlength='9' required />
                                                                
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                                        <div class="form-group  coupon-card">
                                                            <div class="col-md-3">
                                                                <label class="label-name">SMS Text</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control as="textarea" rows={3} id="SMSText" name="SMSText" />
                                                                {/* <textarea class="form-control" id="SMSText" name="SMSText"
                                                                    placeholder="SMSText" title="SMSText">
                                                                    sdfs</textarea> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                                        <div class="form-group  coupon-card">
                                                            <div class="col-md-3">
                                                                <label class="label-name">Terms And Condition<span style={{ color: "red" }}>*</span></label>
                                                            </div>
                                                            <div class="col-md-9">
                                                                <Form.Control as="textarea" rows={3} id="TermsAndCondition" name="TermsAndCondition" placeholder="Terms And Condition" required />
                                                                {/* <textarea class="form-control" id="TermsAndCondition"
                                                                    name="TermsAndCondition" placeholder="Terms And Condition"
                                                                    title="Terms And Condition">
                                                                </textarea> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12 CouponConfig">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">CouponCode Generate Digit</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="CouponCodeDigit" name="CouponCodeDigit" type="text" data-mask="000000" style={{ textAlign: "right" }} maxLength={6} placeholder="CouponCode Generate Digit" required />
                                                                {/* <input class="form-control num disabled" data-val="true"
                                                                    data-val-required="The CouponCodeDigit field is required."
                                                                    id="CouponCodeDigit" min="0" name="CouponCodeDigit"
                                                                    placeholder="CouponCode Generate Digit"
                                                                    style={{ textAlign: "right" }} title="CouponCode Generate Digit"
                                                                    type="number" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6 col-sm-12 CouponConfig">
                                                        <div class="coupon-card">
                                                            <div class="col-md-5">
                                                                <label class="mb-0">Coupon Code Random Text</label>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <Form.Control id="CouponCodeRandomText" name="CouponCodeRandomText" type="text" style={{ textAlign: "right" }} placeholder="Coupon Code Random Text" />
                                                                {/* <input class="form-control disabled" id="CouponCodeRandomText"
                                                                    name="CouponCodeRandomText"
                                                                    placeholder="CouponCodeRandomText"
                                                                    title="CouponCodeRandomText" type="text" value="" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=" form-group row">
                                                    <div class="card-body">
                                                        <div class="form-group row">
                                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="mb-0 coupon-template coupontemplate-title">
                                                                    <div class="col-md-5">
                                                                        <label class="mb-0">Coupon Template</label>
                                                                    </div>
                                                                    <div class="col-md-7">
                                                                        <div class="input-group">
                                                                            <div class="custom-file">
                                                                                <Form.Group controlId="formFile" className="mb-3">
                                                                                    <Form.Control id='chooseFile' className='brandImage' type="file" dir='rtl' onChange={handlefileUpload} />
                                                                                </Form.Group>

                                                                                {/* <input type="file"
                                                                                    onchange="ValidateImageUpload(this,425,150)"
                                                                                    class="custom-file-input" id="CouponLogo"
                                                                                    name="CouponLogo" accept="image/*" />
                                                                                    <label class="custom-file-label">Choose
                                                                                    file</label> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className='UploadAlert'>File with maximum size of 1MB is allowed</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="filtr-item">
                                                                    <small id="maxDimensionsCaption"
                                                                        class="form-text noimagetext"></small>
                                                                    {/* <!-- Caption note --> */}
                                                                    <input id="CouponTemplateImage" name="CouponTemplateImage"
                                                                        type="hidden" value="" />
                                                                    <img id="imgCouponLogo" src="Assets/img/NoImage.png"
                                                                        class="img-fluid mb-1" alt="Company Logo" />
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <footer class="main-footer Custome_bottom-Footer d-flex justify-content-between ">
                            <div class="d-flex active_btn">
                                <label>Active</label>
                                <div class="check-box ml-2">
                                    <input checked="checked" data-val="true" data-val-required="The IsActive field is required."
                                        id="IsActive" name="IsActive" style={{ Zoom: 2 }} type="checkbox" value="true" />
                                </div>
                            </div>
                            <div class="float-right foot_button">
                                <input type="submit" id="btnSubmit" value="Submit" class="btn Custom_btn" onClick={handleSubmit}/>
                                <button class="btn Custom_btn" onClick={() => handleCancel()}>Cancel</button>
                            </div>
                        </footer>
                        <input name="__RequestVerificationToken" type="hidden"
                            value="CfDJ8OIgDDyuXyVJh3-a4OmbMprvEKNzPmsaXFcGRc2ZvjfGwE1wx9zys1NAmQXzGlToNGSXitxjrnahE0ruzWj4drljeXeumxntlgP81kuZ7kKcBaZK4BMSXC4LMaNvq6PAYqteMpdT01-P1Or7oxAFoKk" /><input
                            name="IsActive" type="hidden" value="false" />
                    </form>
                {/* </Form> */}
                </div>
            </section>

        </div>
    )
}
