import React from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default function AddEdit() {

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/LoyaltyGroupMaster', { replace: true })
  }


  return (
    <div>
      <Navbar></Navbar>
      <section class="home-section">
        <Header ScreenName="Loyalty Group Master"></Header>
        <div class="container-fluid">

          {/* <!-- <div id="_Loader"></div> --> */}
          <form action="" enctype="multipart/form-data" method="post"><input id="strMessageCode" name="strMessageCode" type="hidden" value="" /><input id="strMessage" name="strMessage" type="hidden" value="" /><input id="strAction" name="strAction" type="hidden" value="" /><input data-val="true" data-val-required="The LoyaltiGroupID field is required." id="LoyaltiGroupID" name="LoyaltiGroupID" type="hidden" value="1" /><input id="CommaSeperated_VendorIDs" name="CommaSeperated_VendorIDs" type="hidden" value="1050,1052" />    <section class="content-header">
            {/* <div class="row mb-1">
                       <div class="col-sm-12 row form-group">
                           <div class="main_title d-flex justify-content-between align-content-center">
                               <h1 class="page-main-title mb-0">Loyalty Group Master</h1>
                           </div>
                       </div>
                   </div> */}
            <section class="">
              <div class="row">
                <div class="col-md-6">
                  <div class="card card-info devcard">
                    <div class="card-body">
                      <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Group Name<span style={{ color: "red" }}>*</span></label>
                        <div class="col-sm-8">
                          <input class="form-control" id="GroupName" maxlength="50" name="GroupName" placeholder="Group Name" title="Group Name" type="text" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Loyalty Group Type<span style={{ color: "red" }}>*</span></label>
                        <div class="col-sm-8">
                          <select class="form-control" data-val="true" data-val-required="The LoyaltiGroupTypeID field is required." id="LoyaltiGroupTypeID" name="LoyaltiGroupTypeID" style={{ width: "100%" }} title="LoyaltyGroup Type"><option selected="selected" required>Loyalty Use</option>
                            <option value="2">Marketing Group</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Group Vendors<span style={{ color: "red" }}>*</span></label>
                        <div class="col-sm-8">
                          <Form.Select aria-label="Default select example" required>
                            <option value="">-- Select coupon Type --</option>
                            <option selected="selected" value="1">Coupon</option>
                            <option value="2">CashGiftVoucher</option>
                          </Form.Select>
                          {/* <select class="form-control select2bs4" id="mst_VendorIDs" multiple="multiple" name="mst_VendorIDs" style={{ width: "100%" }} title="Vendor Name" required></select> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8OIgDDyuXyVJh3-a4OmbMpoTEwH3b0f5Ezue8609JHgt6YYUNSpp0FjVwzade2kXWzU3-D_IeXejo24PaA_PGYtv5wVFgovrhHYcW2YLfq2YP8uAexOyrt9yqYZRDOZoWiRfFcyovTyjqeVI0wWRZR8" /><input name="IsAllowLogin" type="hidden" value="false" /><input name="IsEnableOTPLogin" type="hidden" value="false" /><input name="AllowNotification" type="hidden" value="false" /><input name="IsActive" type="hidden" value="false" />
            <footer class="main-footer Custome_bottom-Footer d-flex justify-content-between ">
              <div class="d-flex active_btn">
                <label>Active</label>
                <div class="check-box ml-2">
                  <input class="disabled-rights" data-val="true" data-val-required="The IsActive field is required." id="IsActive" name="IsActive" style={{ Zoom: "2" }} type="checkbox" />
                </div>
              </div>
              <div class="float-right foot_button">
                <input type="button" id="btnSubmit" value="Submit" class="btn Custom_btn" />
                {/* <a href="/Admin/mstLoyaltiGroup/List" class="btn Custom_btn">Cancel</a> */}
                <button class="btn Custom_btn" onClick={() => handleCancel()}>Cancel</button>
              </div>
            </footer>
            {/* <input name="__RequestVerificationToken" type="hidden" value="CfDJ8OIgDDyuXyVJh3-a4OmbMpoEH19A102WLiQ688MbP_wb86OZRvS6uywPxlPteOXDfTEkS08IId11po8m6y_vllhA6HVUAAciJcsAxRiNWso-B58epM3qaAouhKWjbgNn4RzdtWYThdkyAs8c_h4sz7E" />
          <input name="IsActive" type="hidden" value="false" /> */}
          </form>
        </div>
      </section>
    </div>
  )
}
