import React from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import { useNavigate } from 'react-router-dom';

function CatalogueAddEdit() {

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/CatalogueMaster', { replace: true })
    }

  return (
      <div>
          <Navbar></Navbar>
          <section class="home-section">
              <Header ScreenName="Catalogue Master"></Header>
              <div class="container-fluid">
                  <form>
                      {/* <div id="_Loader"></div> */}
                      <section class="content-header">

                          <section class="">
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="card card-primary card-outline card-outline-tabs sku_tabs devcard">
                                          <div class="card-header p-0 border-bottom-0">
                                              <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                                                  <li class="nav-item sku-tabs">
                                                      <a class="nav-link active" id="divGeneralDetailtab"
                                                          data-bs-toggle="tab" href="" role="tab"
                                                          aria-controls="divGeneralDetail"
                                                          aria-selected="true">General Detail</a>
                                                  </li>
                                                  <li class="nav-item sku-tabs">
                                                      <a class="nav-link" id="divImageSelectiontab"
                                                          data-bs-toggle="tab" href="" role="tab"
                                                          aria-controls="divImageSelection"
                                                          aria-selected="false">Image Selection</a>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div class="tab-content">
                                              <div class="tab-pane fade show active" id="divGeneralDetail"
                                                  role="tabpanel" aria-labelledby="divGeneralDetailtab">
                                                  
                                                  <div class="form-group row" style={{display:"none"}} id="divSKUNo">
                                                      <div class="col-md-5 row form-group" style={{float:"right"}}>
                                                          <label class="col-md-4">SKU No</label>
                                                          <div class="col-md-8">
                                                              <b></b>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="form-group row">
                                                      <div class="col-md-5 row">
                                                          <label class="col-md-4">SKU Name<span
                                                              style={{color:"red"}}>*</span></label>
                                                          <div class="col-md-8">
                                                              <input class="form-control IsReqFeild" id="SKUName"
                                                                  maxlength="120" name="SKUName"
                                                                  placeholder="SKU Name" title="SKU Name" type="text"
                                                                  value="" />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="form-group row">
                                                      <div class="col-md-5 row">
                                                          <label class="col-md-4">SKU Amount<span
                                                              style={{color:"red"}}>*</span></label>
                                                          <div class="col-md-8">
                                                              <input class="form-control num2 IsReqFeild"
                                                                  data-val="true"
                                                                  data-val-number="The field SKUAmount must be a number."
                                                                  data-val-required="The SKUAmount field is required."
                                                                  id="SKUAmount" maxlength="20" name="SKUAmount"
                                                                  placeholder="SKU Amount" style={{textAlign:"right"}}
                                                                  title="SKU Amount" type="text" value="0" />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="form-group row">
                                                      <div class="col-md-5 row">
                                                          <label class="col-md-4">Description</label>
                                                          <div class="col-md-8">
                                                              <textarea class="form-control" id="Description"
                                                                  maxlength="60" name="Description"
                                                                  placeholder="Description" row="4"
                                                                  title="Description">
                                                              </textarea>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="form-group row">
                                                      <div class="col-md-5 row">
                                                          <label class="col-md-4">SKU Url</label>
                                                          <div class="col-md-8">
                                                              <input class="form-control" id="SKUUrl" maxlength="255"
                                                                  name="SKUUrl" placeholder="SKU Url" 
                                                                  title="SKU Url" type="text" value="" />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                              </div>
                                              <div class="tab-pane fade" id="divImageSelection" role="tabpanel"
                                                  aria-labelledby="divImageSelectiontab">
                                                  
                                                  <div class="form-group row col-md-12">
                                                      <div class="col-md-12">
                                                          <div class="card card-default">
                                                              <div class="card-body row">
                                                                  <div class="col-md-2">
                                                                      <label>Images</label>
                                                                      <div id="actions" class="row">
                                                                          <div class="addfiles-btn">
                                                                              <div class="btn-group w-100">
                                                                                  <span
                                                                                      class="btn btn-success col fileinput-button">
                                                                                      <i class="fas fa-plus"></i>
                                                                                      <span>Add files</span>
                                                                                  </span>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="col-md-8">
                                                                      <div class="files-img">
                                                                          <div id="previews"
                                                                              class="row table table-striped files">
                                                                              <div id="template" class="col-lg-3">
                                                                                  <div class="img-preview">
                                                                                      <div class="delete_btn">
                                                                                          <div class="btn-group">
                                                                                              <span data-dz-remove
                                                                                                  class="btn delete image-close">
                                                                                                  <i
                                                                                                      class="fas fa-times"></i>
                                                                                              </span>
                                                                                          </div>
                                                                                      </div>
                                                                                      <div class="image_thumb">
                                                                                          <span class="preview">
                                                                                              <a href="#"
                                                                                                  class="MagicZoom"
                                                                                                  id="ProductZoom"
                                                                                                  data-options="variableZoom:true; selectorTrigger: hover; transitionEffect: true; expandZoomOn: click; rightClick:true;loading:false"
                                                                                                  data-mobile-options="zoomMode: off;">
                                                                                                  <img id="imgView"
                                                                                                      ondblclick="imgPopup(this)"
                                                                                                      src="data:,"
                                                                                                      alt=""
                                                                                                      data-dz-thumbnail />
                                                                                              </a>
                                                                                          </span>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
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
                          <div class="d-flex active_btn active_footer_btn">
                              <label>Active</label>
                              <div class="check-box ml-2">
                                  <input checked="checked" data-val="true"
                                      data-val-required="The IsActive field is required." id="IsActive" name="IsActive"
                                      style={{ Zoom: "2" }} type="checkbox" value="true" />
                              </div>
                          </div>
                          <div class="float-right foot_button">
                              <input type="button" id="btnSubmit" value="Submit" class="btn Custom_btn" />
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

export default CatalogueAddEdit
