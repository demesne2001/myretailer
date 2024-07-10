import React from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { useNavigate } from 'react-router-dom';

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

export default function MstCustomerService() {

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/dashboard', { replace: true })
    }

    return (
        <div>
             <Navbar></Navbar>
      <section class="home-section">
      <Header ScreenName="Customer Service"></Header>
            <div class="content-wrapper">

                <div class="container-fluid">

                    <form action="" enctype="multipart/form-data" method="post">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                        {/* <div id="_Loader"></div> */}
                        <section class="content-header">
                            <div class="row" style={{marginBottom: "81px"}}>
                                <div class="col-sm-12 row form-group">
                                    <div class="main_title d-flex justify-content-between align-content-center">
                                        <h1 class="page-main-title mb-0 pagetitle">About Us</h1>
                                    </div>
                                </div>
                            </div>
                            <section class="">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card card-primary card-outline card-outline-tabs">
                                            <div class="card-header p-0 border-bottom-0">
                                                <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist"
                                                    style={{width: "100%"}}>
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="divAboutApptab" data-toggle="pill"
                                                            href="" role="tab" aria-controls="divAboutApp"
                                                            aria-selected="true">AboutApp</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divPricayPolicyTab" data-toggle="pill"
                                                            href="" role="tab"
                                                            aria-controls="divPricayPolicy" aria-selected="false">Privacy
                                                            Policy</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divTermsAndConditionTab" data-toggle="pill"
                                                            href="" role="tab"
                                                            aria-controls="divTermsAndCondition" aria-selected="false">Terms
                                                            & Condition</a>
                                                        </li>
                                                        
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divFAQTab" data-toggle="pill" href=""
                                                            role="tab" aria-controls="divFAQ" aria-selected="false">F A
                                                            Q</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divHowToReedemPointTab" data-toggle="pill"
                                                            href="" role="tab"
                                                            aria-controls="divHowToReedemPoint" aria-selected="false">How to
                                                            Reedem Points</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divCouponCodePolicyTab" data-toggle="pill"
                                                            href="" role="tab"
                                                            aria-controls="divCouponCodePolicy" aria-selected="false">Coupon
                                                            Code Policy</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divLoyaltiPolicyTab" data-toggle="pill"
                                                            href="" role="tab"
                                                            aria-controls="divLoyaltiPolicy" aria-selected="false">Loyalty
                                                            Policy</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="divMyRewardsPolicyTab" data-toggle="pill"
                                                            href="" role="tab"
                                                            aria-controls="divMyRewardsPolicy" aria-selected="false">My
                                                            Rewards Policy</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="card-body">
                                                    <div class="tab-content">
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
                                                                initialData: '',
                                                            }}
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <footer class="main-footer Custome_bottom-Footer d-flex justify-content-between ">
                            <div>
                            </div>
                            <div class="float-right foot_button">
                                <input type="button" id="btnSubmit" value="Submit" class="btn Custom_btn"
                                    onclick="btnSubmitClick();" />
                                    {/* <a href="/Admin/Dashboard/Index" class="btn Custom_btn">Cancel</a> */}
                                    <button class="btn Custom_btn" onClick={() => handleCancel()}>Cancel</button>
                            </div>
                        </footer>
                        <input name="__RequestVerificationToken" type="hidden"
                            value="CfDJ8OIgDDyuXyVJh3-a4OmbMpomAO_5H9TOULZbCwFFFlqTHOI9dfaj89j48QQlGAYXIgyecc3btvRTAcojzAh5wTC4jg9ln_x2UPQXRAenqoVPGGWJA6bOINRSmGkBWDd579aq9bMaxqPX6tFOSiQq_hE" />
                    </form>

                </div>
            </div>
            </section>
        </div>
    )
}
