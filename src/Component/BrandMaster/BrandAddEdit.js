import React from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function BrandAddEdit() {

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/BrandMaster', { replace: true })
    }

    function handlefileUpload(event) {
        if (event.target.files && event.target.files[0]) {
            console.log("file", event.target.files, event.target.files[0].size)
            if (event.target.files[0].size > 1 * 1000 * 1024) {
                document.getElementsByClassName('UploadAlert')[0].style.display = 'Block'
                document.getElementById('Image').value = ''
                return false;
            }

            else {
                document.getElementsByClassName('UploadAlert')[0].style.display = 'none'
            }
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <section class="home-section">
                <Header ScreenName="Brand Master"></Header>
                <div class="container-fluid">
                    <form>
                        {/* <div id="_Loader"></div> */}
                        <section class="content-header">

                            <section class="">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card card-primary devcard">
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <div class="col-md-12 row">
                                                        <label class="col-xl-6 col-lg-12 col-md-12 brand-fieldtitle">Brand
                                                            Name<span style={{ color: "red" }}>*</span></label>
                                                        <div class="col-xl-6 col-lg-12 col-md-12">
                                                            <input class="form-control IsReqFeild brandname-field"
                                                                id="BrandName" maxlength="30" name="BrandName"
                                                                placeholder="Brand Name" title="Brand Name" type="text"
                                                                value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-12 row">
                                                        <label class="col-xl-6 col-lg-12 col-md-12 brand-fieldtitle">Brand
                                                            Image<span style={{ color: "red" }}>*</span></label>
                                                        <div class="col-xl-6 col-lg-12 col-md-12">
                                                            <Form.Group controlId="formFile" className="mb-3">
                                                                <Form.Control className='brandImage' type="file" dir='rtl' onChange={handlefileUpload}/>
                                                            </Form.Group>

                                                            {/* <input type="file" onChange={handlefileUpload}
                                                                class="custom-file-input" id="Image" name="Image"
                                                                accept="image/*" />
                                                            <label class="custom-file-label brandname-file"></label> */}

                                                            <div className='UploadAlert'>File with maximum size of 1MB is allowed</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="row card img_busmaster">
                                            <div class="filtr-item-logo col-md-12">
                                                <input id="BusinessCategoryImage" name="BusinessCategoryImage" type="hidden"
                                                    value="2646fb32-7827-451a-aec3-9bb3698e8aee.png" />
                                                <img id="img" src=''
                                                    class="img-fluid business-img mb-1" alt="Image" />
                                                <span class="business-close image-close" style={{ cursor: "pointer" }}>
                                                    <i class="fas fa-times" title="Remove Image"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <footer class="main-footer Custome_bottom-Footer d-flex justify-content-between ">
                            <div class="d-flex active_btn active_footer_btn">
                                <label>Active</label>
                                <div class="check-box ml-2">
                                    <input checked="checked" data-val="true"
                                        data-val-required="The IsActive field is required." id="IsActive" name="IsActive"
                                        style={{ Zoom: "2" }} type="checkbox" value="true" />
                                </div>
                            </div>
                            <div class="float-right foot_button">
                                <input type="button" id="btnSubmit" value="Submit" class="btn Custom_btn"
                                />
                                <button class="btn Custom_btn" onClick={() => handleCancel()}>Cancel</button>
                            </div>
                        </footer>
                        <input name="__RequestVerificationToken" type="hidden"
                            value="CfDJ8OIgDDyuXyVJh3-a4OmbMprH_bBwN_d3oPXBbdCS742gFwKzMNgxhs0PMhqgRztqboRgFUmGYvHfn8ruPB-wPfBHSrFt2xgkqi1VCNUbuFEjbwHNxoGXAt5eHkUx8wy1y_0L2iN7tP4klRtHl34cqcc" />
                        <input name="IsActive" type="hidden" value="false" />
                    </form>

                </div>
            </section>
        </div>
    )
}

export default BrandAddEdit
