import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    const navVendor = () => {
        navigate('/VendorMaster', { replace: true })
    }

    const navLoyalty = () => {
        navigate('/LoyaltyGroupMaster', { replace: true })
    }

    const navCoupon = () => {
        navigate('/CouponMaster', { replace: true })
    }

    const navDashboard = () => {
        navigate('/dashboard', { replace: true })
    }

    const navCustomerserice = () => {
        navigate('/mstcustomerservice', { replace: true })
    }

    const navVendorSponser = () => {
        navigate('/VendorSponserMaster', { replace: true })
    }

    const navVendorPremium = () => {
        navigate('/VendorPremiumMaster', { replace: true })
    }

    const navBrand = () => {
        navigate('/BrandMaster', { replace: true })
    }

    const navBusinessCategory = () => {
        navigate('/BusinessCategory', { replace: true })
    }

    const navCatalogueMaster = () => {
        navigate('/CatalogueMaster', { replace: true })
    }

    const navSchemeMaster = () => {
        navigate('/SchemeMaster', { replace: true })
    }

    const navSliderimg = () => {
        navigate('/SliderImage', { replace: true })
    }

    function openmaster() {
        let id = document.getElementById('master')

        if (document.getElementById('master').className !== 'showMenu') {
            id.classList.add('showMenu')
        } else {
            id.classList.remove('showMenu')
        }
    }

    return (

        <div className="sidebar close" id='navbar-close-open'>
            <div className="logo-details">
                <span className="logo_name"><img src="./assets/img/logoFull.png" className="img-fluid" style={{ height: 70 }} /></span>

                <span className="logo_name vender-name ">VendorName</span>
            </div>
            <ul class="nav-links">
                <li>
                    <a onClick={navDashboard}>
                        <i class='bx bx-home'></i>
                        <span class="link_name">Home</span>
                    </a>
                    <ul class="sub-menu blank">
                        <li><a class="link_name" onClick={navDashboard}>Dashboard</a></li>
                    </ul>
                </li>
                <li id='master' onClick={openmaster}>
                    <div class="icon-link">
                        <a>
                            <i class='bx bx-news'></i>
                            <span class="link_name">Master</span>
                        </a>
                        <i class='bx bxs-chevron-down arrow'></i>
                    </div>
                    <ul class="sub-menu">
                        <li><a class="link_name">Master Menu</a></li>
                        <li><a onClick={navVendor}>Vendor Master</a></li>
                        <li><a onClick={navBusinessCategory}>Business Category</a></li>
                        <li><a onClick={navSliderimg}>Slider Image</a></li>
                        <li><a onClick={navLoyalty}>Loyalty Group</a></li>
                        <li><a onClick={navVendorSponser}>Vendor Sponsors</a></li>
                        <li><a onClick={navCustomerserice}>Customer Service</a></li>
                        <li><a onClick={navCoupon}>Coupon Master</a></li>
                        <li><a onClick={navSchemeMaster}>Scheme Master</a></li>
                        <li><a onClick={navCatalogueMaster}>SKU Catalogue</a></li>
                        <li><a onClick={navBrand}>Brand Master</a></li>
                        <li><a>Gallery Images</a></li>
                        <li><a onClick={navVendorPremium}>Vendor Premium</a></li>
                    </ul>
                </li>

            </ul>
        </div>

    )
}
