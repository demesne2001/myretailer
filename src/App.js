import logo from './logo.svg';
import './App.css';
// import '../src/Component/Assets/css/site.css'
import '../src/Component/Assets/css/custom_style.css'

import '../src/Component/Assets/css/demo.css'
import '../src/Component/Assets/css/dashboard.css'

import './Component/Assets/vendor/css/rtl/core-dark.css'
import './Component/Assets/vendor/css/rtl/core.css'
import './Component/Assets/vendor/css/rtl/theme-bordered.css'
import './Component/Assets/vendor/css/rtl/theme-default-dark.css'
import './Component/Assets/vendor/css/rtl/theme-default.css'
import './Component/Assets/vendor/css/rtl/theme-semi-dark.css'

import './Component/Assets/vendor/css/bootstrap.css'
import './Component/Assets/vendor/css/bootstrap.min.css'

import '../src/Component/Assets/vendor/fonts/boxicons.css'
// import './Component/Assets/vendor/css/font-awsome.all.min.css'
import './Component/Assets/vendor/fonts/flag-icons.css'
import './Component/Assets/vendor/fonts/flag-icons.css'

import '../src/Component/Assets/css/reponsive.css'
import '../src/Component/Assets/developer.css'
import '../src/Component/Assets/aggrid.css'

import Dashboard from './Component/commoncomponent/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CouponListing from './Component/CouponMaster/CouponListing';
import CouponAddEdit from './Component/CouponMaster/CouponAddEdit';
import LoyaltyGroupMasterAddEdit from './Component/LoyaltyGroupMaster/AddEdit';
import LoyaltyGroupMaster from './Component/LoyaltyGroupMaster/Listing';
import MstCustomerService from './Component/CustomerService/MstCustomerService';
import VendorAddEdit from './Component/VendorMaster/AddEdit';
import VendorListing from './Component/VendorMaster/Listing';
import VendorPremiumMasterAddEdit from './Component/VendorPremiumMaster/AddEdit'
import VendorPremiumMaster from './Component/VendorPremiumMaster/Listing'

import VendorSponserMaster from '../src/Component/VendorSponserMaster/Listing';
import Login from './Component/Login/Login';
import BrandListing from './Component/BrandMaster/BrandListing';
import BrandAddEdit from './Component/BrandMaster/BrandAddEdit';
import BusinessCategoryListing from './Component/BusinessCategoryMaster/BusinessCategoryListing';
import BusinessCategoryAddEdit from './Component/BusinessCategoryMaster/BusinessCategoryAddEdit';
import CatalogueListing from './Component/CatalogueMaster/CatalogueListing';
import CatalogueAddEdit from './Component/CatalogueMaster/CatalogueAddEdit';
import SchemeListing from './Component/SchemeMaster/SchemeListing';
import SliderImageListing from './Component/SliderImage/SliderImageListing';
import PrivateRoutes from './Component/Utility/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
          <Route exact path='/CouponMaster' element={<CouponListing />}></Route>
          <Route exact path='/CouponMasterAddEdit' element={<CouponAddEdit />}></Route>
          <Route exact path='/LoyaltyGroupMasterAddEdit' element={<LoyaltyGroupMasterAddEdit />}></Route>
          <Route exact path='/LoyaltyGroupMaster' element={<LoyaltyGroupMaster />}></Route>
          <Route exact path='/mstcustomerservice' element={<MstCustomerService />}></Route>
          <Route exact path='/VendorMaster' element={<VendorListing />}></Route>
          <Route exact path='/VendorMasterAddEdit' element={<VendorAddEdit />}></Route>
          <Route exact path='/VendorPremiumMaster' element={<VendorPremiumMaster />}></Route>
          <Route exact path='/VendorPremiumMasterAddEdit' element={<VendorPremiumMasterAddEdit />}></Route>
          <Route exact path='/VendorSponserMaster' element={<VendorSponserMaster />}></Route>
          <Route exact path='/BrandMaster' element={<BrandListing />}></Route>
          <Route exact path='/BrandMasterAddEdit' element={<BrandAddEdit />}></Route>
          <Route exact path='/BusinessCategory' element={<BusinessCategoryListing />}></Route>
          <Route exact path='/BusinessCategoryAddEdit' element={<BusinessCategoryAddEdit />}></Route>
          <Route exact path='/CatalogueMaster' element={<CatalogueListing />}></Route>
          <Route exact path='/CatalogueMasterAddEdit' element={<CatalogueAddEdit />}></Route>
          <Route exact path='/SchemeMaster' element={<SchemeListing />}></Route>
          <Route exact path='/SliderImage' element={<SliderImageListing />}></Route>
        </Route>
        <Route exact path='/' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
