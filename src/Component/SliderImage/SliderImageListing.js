import React from 'react'
import Navbar from '../commoncomponent/Navbar'
import Header from '../commoncomponent/Header'
import Footer from '../commoncomponent/Footer'
import { useNavigate } from 'react-router-dom';

function SliderImageListing() {

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/SliderImage', { replace: true })
    }

  return (
      <div>
          <Navbar></Navbar>
          <section class="home-section">
              <Header ScreenName=" Slider Images Master"></Header>

              <div class="vendorsponer-card">
                  <div id="divContactDetail">
                      <div class="card">
                          <div class="card-body">
                              <div class="slider-subheader card">
                                  <div class="form-group row mb-0">
                                      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                          <div class="coupon-card mb-3">
                                              <div class="col-md-5 pl-0">
                                                  <label class="cartegoryname mb-0">Category</label>
                                              </div>
                                              <div class="col-md-7">
                                                  <div class="slider-general-dropdown">
                                                      <select class="form-control general-dropdown"
                                                          id="BusinessCategoryID" name="BusinessCategoryID"
                                                           style={{width:"100%"}}>
                                                          <option value="null">General</option>
                                                          <option value="2">Jewellery</option>
                                                          <option value="3">Footwear</option>
                                                          <option value="4">Watch</option>
                                                          <option value="5">Groceries and Dryfruits</option>
                                                          <option value="6">Garment</option>
                                                          <option value="7">Fashion Apparels</option>
                                                      </select>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                          <div class="coupon-card mb-0">
                                              <div class="col-md-5 pl-0">
                                                  <label class="categorychoosefile mb-0">Category Template</label>
                                              </div>
                                              <div class="col-sm-7">
                                                  <input type="file"
                                                      class="custom-file-input" accept="image/*" id="btnNewImage"
                                                      multiple />
                                                      <label class="custom-file-label">Choose file</label>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 mb-0">
                                          <div class="categorynoteimage">
                                              <div id="divMessage"><span style={{color:"red"}}>Note : Image dimension
                                                  should be approx. 1024 * 500 </span></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              <section class="">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="card card-primary slidersection">
                              <div class="card-body col-md-12 row img_drag slider_image_list">
                                  <ul id="idAddNewImageDiv"></ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              </div>

              <footer class="main-footer Custome_bottom-Footer d-flex justify-content-between ">
                  <div>
                  </div>
                  <div class="float-right foot_button">
                      <input type="button" id="btnSubmit" value="Submit" class="btn Custom_btn" />
                      <button class="btn Custom_btn" onClick={() => handleCancel()}>Cancel</button>
                  </div>
              </footer>
          </section>

      </div>
  )
}

export default SliderImageListing
