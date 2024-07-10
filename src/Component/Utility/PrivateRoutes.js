import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = { 'token': false }

    if (localStorage.getItem('token') === null) {
        auth.token = false
    }

    else {
        auth.token = true
    }
    
    return (
        auth.token ? <Outlet to='/dashboard' /> : <Navigate to="/" />
    )
}

export default PrivateRoutes