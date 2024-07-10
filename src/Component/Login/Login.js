import React, { useEffect, useState } from 'react'
import loginimg from '../Assets/img/bg/login.png'
import logo from '../Assets/img/logoFull.png'
import sectionimg from '../Assets/img/bg/login_imgg.jpg'
import Form from 'react-bootstrap/Form';
import post from '../Utility/APIHandle';
import API from '../Utility/API';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();

    const input_login = {
        LoginID: "",
        Password: "",
        VendorCode: ""
    }
    
    const [inputdata, setInputdata] = useState(input_login)


    function handleChange(e) {
        if (e.target.value !== '') {
            document.getElementById(e.target.id).className = "form-control";
            setInputdata({ ...inputdata, [e.target.name]: e.target.value })
        }
        else {
            document.getElementById(e.target.id).className = "form-control is-invalid";
            setInputdata({ ...inputdata, [e.target.name]: e.target.value })
        }
    }


    const handlelogin = (e) => {
        
        e.preventDefault()
        // console.log("input", inputdata)
    

        let space_regex = /^\S*$/

        // inputdata.LoginID = inputdata.LoginID.replace(/^\s+|\s+$/gm, '');
        inputdata.LoginID = inputdata.LoginID.replaceAll(' ', '');

        inputdata.Password = inputdata.Password.replaceAll(' ', '')

        inputdata.VendorCode = inputdata.VendorCode.replaceAll(' ', '')

        // let tstlogin = space_regex.test(inputdata.LoginID)
        // let tstpwd = space_regex.test(inputdata.LoginID)
        // let tstvendor = space_regex.test(inputdata.LoginID)

        console.log("input", inputdata)
        
        if (inputdata.LoginID !== '' && inputdata.Password !== '' && inputdata.VendorCode !== '') {
            post(inputdata, API.login, {}, "post").then((res) => {
                console.log("login", res)
                if (res.data !== undefined) {
                    if (res.data.HasError === true) {
                        alert(res.data.Messages) 
                    }
                    else {
                        // if (res.status === 200 ) {
                            localStorage.setItem("token", res.data["Token"]);
                            navigate("/dashboard", { replace: true });
                        // } else {
                        //     alert(res.data.Messages);
                        // }
                    }
                }
            });
        }
        

        else {
            if (inputdata.LoginID === '') {
                document.getElementsByClassName('form-control')[0].className = "form-control is-invalid"
            }
            else if (inputdata.Password === '') {
                document.getElementsByClassName('form-control')[1].className = "form-control is-invalid"
            }
            else if (inputdata.VendorCode === '') {
                document.getElementsByClassName('form-control')[2].className = "form-control is-invalid"
            }
        }
    };


    function handlepwd(e) {

        var alpha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        var passwd = e.target.value;
        let tst = alpha.test(passwd)
        console.log("reg", passwd)
        console.log(tst, 'reg')

        if (passwd === '') {
            document.getElementById('myPass').className = "form-control";
            return true
        }


        else if (tst === false) {
            document.getElementById('myPass').className = "form-control is-invalid";
            return false;
        }
        else {
            document.getElementById('myPass').className = "form-control";
            return true;
        }
    }


    function handlepwdeye() {
        if (document.getElementById("myPass").type === "text") {
            document.getElementById("myPass").type = "Password"
            document.getElementById("pwdid").className = 'fa fa-eye-slash'
        }

        else {
            document.getElementById("pwdid").className = 'fa fa-eye'
            document.getElementById("myPass").type = "text"
        }
    }



    function handleUserid(e) {

        var alpha = /^(?=.*[a-zA-Z])[a-zA-Z0-9.\-_$@*/!]{3,30}$/
        var login = e.target.value;
        let tst = alpha.test(login)

        if (login === '') {
            document.getElementById('userlogin').className = "form-control";
            return true
        }


        else if (tst === false) {
            document.getElementById('userlogin').className = "form-control is-invalid";
            return false;
        }

        else {
            document.getElementById('userlogin').className = "form-control";
            return true;
        }
    }


    return (
        <>
            <section className="login-8" style={{ backgroundImage: `url(${sectionimg})` }}>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-box">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="vector_img">
                                            <img src={loginimg} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-info">
                                            <div className="form-section">
                                                <div className="logo_myretailer clearfix">
                                                    <img src={logo} alt="logo" className="img-fluid" />
                                                </div>
                                                <h3>Login</h3>
                                                <div className="login-inner-form">
                                                    <form >
                                                        <div className="form-group form-box">
                                                            <input type="text" name="LoginID" className="form-control" id='LoginID' placeholder="LoginID" aria-label="LoginID" style={{ textTransform: "uppercase" }} onChange={handleChange} required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Invalid LoginID
                                                            </Form.Control.Feedback>
                                                        </div>
                                                        <div className="form-group form-box">
                                                            <input type="password" name="Password" className="form-control" id="myPass" placeholder="Password" aria-label="Password" maxLength={20} onChange={handleChange} required/>
                                                            <span id="showPass">
                                                                <i id='pwdid' className="fa fa-eye-slash" aria-hidden="true" onClick={handlepwdeye}></i>
                                                                {/* <i className="fa fa-eye-slash" aria-hidden="true" style={{ display: "none" }}></i> */}
                                                            </span>
                                                            <Form.Control.Feedback type="invalid">
                                                                Invalid Password!
                                                            </Form.Control.Feedback>
                                                        </div>
                                                        <div className="form-group form-box">
                                                            <input type="text" name="VendorCode" className="form-control " id="VendorCode" maxLength="16" autoComplete="off" placeholder="VendorCode" aria-label="VendorCode" onChange={handleChange} required />

                                                            <Form.Control.Feedback type="invalid">
                                                                Invalid VendorCode!
                                                            </Form.Control.Feedback>
                                                        </div>
                                                        <div className="checkbox form-group form-box">
                                                            <div className="form-check checkbox-theme">
                                                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                                                <label className="form-check-label" htmlFor="rememberMe">&nbsp;Remember me</label>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <button type="submit" className="btn-md btn-theme w-100" onClick={handlelogin}>Sign in</button>
                                                        </div>
                                                    </form>
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

        </>
    )
}

export default Login
