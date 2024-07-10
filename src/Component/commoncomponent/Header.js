import React from 'react'
import '../Assets/css/site.css'
import '../Assets/css/custom_style.css'
import '../Assets/css/reponsive.css'
import '../Assets/css/demo.css'
import user from '../Assets/img/NoImageReview.svg'
import '../Assets/developer.css'
import notification from '../Assets/img/icons/dashboard1/notification.svg'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {

    // console.log("***> ",props.ScreenName)
    let ScreenName = props.ScreenName


    function menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
    }

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/',{replace: true})
    }

    // function myfunc() {

    //     let menu = document.querySelector('.menu');
    //     menu.classList.toggle('active');

    //     // var x = document.getElementById("usermenu");
    //     // if (x.style.display === "block") {
    //     //     x.style.display = "none";
    //     // } else {
    //     //     x.style.display = "block";
    //     // }
    // }


    document.getElementById('root').addEventListener("click", (e) => {
        // console.log("eeee",e)
        if (e.target.id !== 'userlogin') {
            if (e.target.className === 'username') {
                let menu = document.querySelector('.menu');
                menu.classList.add('active');
            }
            else {
                if (document.querySelector('.menu') !== null) {
                    
                    let menu = document.querySelector('.menu');
                    menu.classList.remove('active');
                }
            }
        }
    })


    function handleNavbar() {
        if (document.getElementById('navbar-close-open') !== undefined) {
            console.log("aaa", document.getElementById('navbar-close-open').classList)
            if (document.getElementById('navbar-close-open').className === 'sidebar') {
                document.getElementById('navbar-close-open').classList.add('close')
            }
            else {
                document.getElementById('navbar-close-open').classList.remove('close')
            }
        }
    }


    return (
        // <div>
        //     <div class="home-content">
        //         <div class="main-title">
        //             <i class='bx bx-menu' onClick={handleNavbar}></i>
        //             <span class="text" >{ScreenName}</span>
        //         </div>

        //         <div class="nav-item dropdown">
        //             <div class="notification-icon"><img src={notification}
        //                 class="img-fluid" height="30" width="30" /></div>
        //             <img id='userlogin' src={user} height="60" width="50" onClick={myfunc} />
        //             <div class="menu">
        //                 <ul>
        //                     <li><a href=''><i class="fas fa-user-alt" ></i>My Profile</a></li>
        //                     <li><a href=''><i class="fas fa-sign-out-alt"></i>Log Out</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>




        <div>
            <div class="home-content">
                <div class="main-title">
                    <i class='bx bx-menu' onClick={handleNavbar}></i>
                    <span class="text" >{ScreenName}</span>
                </div>

                <div class="action">
               <div class="notification-icon"><img src={notification}
                                    class="img-fluid" height="30" width="30" /></div>
                    <div class="profile" onClick={menuToggle}>
                        <img
                            id='userlogin'
                            src={user}
                            alt=""
                        />
                    </div>

                    <div class="menu">
                        <h3 className='username'>
                            Hello
                            {/* <span>A Web Developer</span> */}
                        </h3>

                        <ul>
                            <li>
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItNDIgMCA1MTIgNTEyLjAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEwLjM1MTU2MiAyNDYuNjMyODEyYzMzLjg4MjgxMyAwIDYzLjIyMjY1Ny0xMi4xNTIzNDMgODcuMTk1MzEzLTM2LjEyODkwNiAyMy45NzI2NTYtMjMuOTcyNjU2IDM2LjEyNS01My4zMDQ2ODcgMzYuMTI1LTg3LjE5MTQwNiAwLTMzLjg3NS0xMi4xNTIzNDQtNjMuMjEwOTM4LTM2LjEyODkwNi04Ny4xOTE0MDYtMjMuOTc2NTYzLTIzLjk2ODc1LTUzLjMxMjUtMzYuMTIxMDk0LTg3LjE5MTQwNy0zNi4xMjEwOTQtMzMuODg2NzE4IDAtNjMuMjE4NzUgMTIuMTUyMzQ0LTg3LjE5MTQwNiAzNi4xMjVzLTM2LjEyODkwNiA1My4zMDg1OTQtMzYuMTI4OTA2IDg3LjE4NzVjMCAzMy44ODY3MTkgMTIuMTU2MjUgNjMuMjIyNjU2IDM2LjEzMjgxMiA4Ny4xOTUzMTIgMjMuOTc2NTYzIDIzLjk2ODc1IDUzLjMxMjUgMzYuMTI1IDg3LjE4NzUgMzYuMTI1em0wIDAiLz48cGF0aCBkPSJtNDI2LjEyODkwNiAzOTMuNzAzMTI1Yy0uNjkxNDA2LTkuOTc2NTYzLTIuMDg5ODQ0LTIwLjg1OTM3NS00LjE0ODQzNy0zMi4zNTE1NjMtMi4wNzgxMjUtMTEuNTc4MTI0LTQuNzUzOTA3LTIyLjUyMzQzNy03Ljk1NzAzMS0zMi41MjczNDMtMy4zMDg1OTQtMTAuMzM5ODQ0LTcuODA4NTk0LTIwLjU1MDc4MS0xMy4zNzEwOTQtMzAuMzM1OTM4LTUuNzczNDM4LTEwLjE1NjI1LTEyLjU1NDY4OC0xOS0yMC4xNjQwNjMtMjYuMjc3MzQzLTcuOTU3MDMxLTcuNjEzMjgyLTE3LjY5OTIxOS0xMy43MzQzNzYtMjguOTY0ODQzLTE4LjE5OTIxOS0xMS4yMjY1NjMtNC40NDE0MDctMjMuNjY3OTY5LTYuNjkxNDA3LTM2Ljk3NjU2My02LjY5MTQwNy01LjIyNjU2MyAwLTEwLjI4MTI1IDIuMTQ0NTMyLTIwLjA0Mjk2OSA4LjUtNi4wMDc4MTIgMy45MTc5NjktMTMuMDM1MTU2IDguNDQ5MjE5LTIwLjg3ODkwNiAxMy40NjA5MzgtNi43MDcwMzEgNC4yNzM0MzgtMTUuNzkyOTY5IDguMjc3MzQ0LTI3LjAxNTYyNSAxMS45MDIzNDQtMTAuOTQ5MjE5IDMuNTQyOTY4LTIyLjA2NjQwNiA1LjMzOTg0NC0zMy4wMzkwNjMgNS4zMzk4NDQtMTAuOTcyNjU2IDAtMjIuMDg1OTM3LTEuNzk2ODc2LTMzLjA0Njg3NC01LjMzOTg0NC0xMS4yMTA5MzgtMy42MjEwOTQtMjAuMjk2ODc2LTcuNjI1LTI2Ljk5NjA5NC0xMS44OTg0MzgtNy43Njk1MzItNC45NjQ4NDQtMTQuODAwNzgyLTkuNDk2MDk0LTIwLjg5ODQzOC0xMy40Njg3NS05Ljc1LTYuMzU1NDY4LTE0LjgwODU5NC04LjUtMjAuMDM1MTU2LTguNS0xMy4zMTI1IDAtMjUuNzUgMi4yNTM5MDYtMzYuOTcyNjU2IDYuNjk5MjE5LTExLjI1NzgxMyA0LjQ1NzAzMS0yMS4wMDM5MDYgMTAuNTc4MTI1LTI4Ljk2ODc1IDE4LjE5OTIxOS03LjYwNTQ2OSA3LjI4MTI1LTE0LjM5MDYyNSAxNi4xMjEwOTQtMjAuMTU2MjUgMjYuMjczNDM3LTUuNTU4NTk0IDkuNzg1MTU3LTEwLjA1ODU5NCAxOS45OTIxODgtMTMuMzcxMDk0IDMwLjMzOTg0NC0zLjE5OTIxOSAxMC4wMDM5MDYtNS44NzUgMjAuOTQ1MzEzLTcuOTUzMTI1IDMyLjUyMzQzNy0yLjA1ODU5NCAxMS40NzY1NjMtMy40NTcwMzEgMjIuMzYzMjgyLTQuMTQ4NDM3IDMyLjM2MzI4Mi0uNjc5Njg4IDkuNzk2ODc1LTEuMDIzNDM4IDE5Ljk2NDg0NC0xLjAyMzQzOCAzMC4yMzQzNzUgMCAyNi43MjY1NjIgOC40OTYwOTQgNDguMzYzMjgxIDI1LjI1IDY0LjMyMDMxMiAxNi41NDY4NzUgMTUuNzQ2MDk0IDM4LjQ0MTQwNiAyMy43MzQzNzUgNjUuMDY2NDA2IDIzLjczNDM3NWgyNDYuNTMxMjVjMjYuNjI1IDAgNDguNTExNzE5LTcuOTg0Mzc1IDY1LjA2MjUtMjMuNzM0Mzc1IDE2Ljc1NzgxMy0xNS45NDUzMTIgMjUuMjUzOTA2LTM3LjU4NTkzNyAyNS4yNTM5MDYtNjQuMzI0MjE5LS4wMDM5MDYtMTAuMzE2NDA2LS4zNTE1NjItMjAuNDkyMTg3LTEuMDM1MTU2LTMwLjI0MjE4N3ptMCAwIi8+PC9zdmc+"
                                />
                                <a href="">My Profile</a>
                            </li>
                            
                            <li>
                                <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTUuMTUsNDY4LjYyNUg2My43ODdjLTExLjczNywwLTIxLjI2Mi05LjUyNi0yMS4yNjItMjEuMjYyVjY0LjYzOGMwLTExLjczNyw5LjUyNi0yMS4yNjIsMjEuMjYyLTIxLjI2MkgyNTUuMTUNCgkJCWMxMS43NTgsMCwyMS4yNjItOS41MDQsMjEuMjYyLTIxLjI2MlMyNjYuOTA4LDAuODUsMjU1LjE1LDAuODVINjMuNzg3QzI4LjYxOSwwLjg1LDAsMjkuNDcsMCw2NC42Mzh2MzgyLjcyNA0KCQkJYzAsMzUuMTY4LDI4LjYxOSw2My43ODcsNjMuNzg3LDYzLjc4N0gyNTUuMTVjMTEuNzU4LDAsMjEuMjYyLTkuNTA0LDIxLjI2Mi0yMS4yNjINCgkJCUMyNzYuNDEyLDQ3OC4xMjksMjY2LjkwOCw0NjguNjI1LDI1NS4xNSw0NjguNjI1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1LjY2NCwyNDAuODYxTDM3Ni4zODgsMTEzLjI4NmMtOC4zMzUtOC4yNS0yMS44MTUtOC4xNDMtMzAuMDY1LDAuMjEzcy04LjE2NSwyMS44MTUsMC4yMTMsMzAuMDY1bDkyLjM4NSw5MS4xNzMNCgkJCUgxOTEuMzYyYy0xMS43NTgsMC0yMS4yNjIsOS41MDQtMjEuMjYyLDIxLjI2MmMwLDExLjc1OCw5LjUwNCwyMS4yNjMsMjEuMjYyLDIxLjI2M2gyNDcuNTU5bC05Mi4zODUsOTEuMTczDQoJCQljLTguMzc3LDguMjUtOC40NDEsMjEuNzA5LTAuMjEzLDMwLjA2NWM0LjE2Nyw0LjIxLDkuNjUzLDYuMzM2LDE1LjEzOSw2LjMzNmM1LjQwMSwwLDEwLjgwMS0yLjA0MSwxNC45MjYtNi4xMjRsMTI5LjI3Ni0xMjcuNTc1DQoJCQljNC4wNC0zLjk5Nyw2LjMzNi05LjQ0MSw2LjMzNi0xNS4xMzlDNTEyLDI1MC4zMDIsNTA5LjcyNSwyNDQuODgsNTA1LjY2NCwyNDAuODYxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                                />
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
