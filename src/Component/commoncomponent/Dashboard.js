import React from 'react'
import Navbar from './Navbar';
import Header from './Header';

export default function Dashboard() {
    
  return (
    <>
        {/* <h1>om patel</h1> */}
      <Navbar></Navbar>
      <section class="home-section">
      <Header ScreenName="Dashboard"></Header>
      <section class="dashboard-card">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card card-primary dashboardcard-details">
                   
                    <div class="carddetail">
                        <div class="card-subtittle">
                            <h1>100</h1>
                            <p> Registered Customer</p>
                        </div>
                        <div class="card-icon">
                            <img src="./assets/img/bg/Register_customer.png" class="img-fluid register-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card card-primary dashboardcard-details">
                    <div class="carddetail">
                        <div class="card-subtittle">
                            <h1>50</h1>
                            <p>Customer Reviews</p>
                        </div>
                        <div class="card-icon">
                            <img src="./assets/img/bg/Customer_review.png" class="img-fluid customer-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card card-primary dashboardcard-details">
                    <div class="carddetail">
                        <div class="card-subtittle">
                            <h1>20</h1>
                            <p>Coupon Master</p>
                        </div>
                        <div class="card-icon">
                            <img src="./assets/img/bg/Coupan_master.png" class="img-fluid coupon-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card card-primary dashboardcard-details">
                    <div class="carddetail">
                        <div class="card-subtittle">
                            <h1>500</h1>
                            <p>Loyalty Points</p>
                        </div>
                        <div class="card-icon">
                            <img src="./assets/img/bg/starrcoin.png" class="img-fluid coupon-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      </section>
    </>
  )
}
