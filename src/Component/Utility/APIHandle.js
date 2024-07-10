import axios from "axios"
import API from "./API"
import { useNavigate } from "react-router-dom"

function NavigateToLogin() {
    const navigate = useNavigate();
    navigate('/', { replace: true });
}

export default async function post(inputJson, APINAME, defaultRes, methodType) {

    let header = {
        // 'tkt': `${localStorage.getItem('token')}`,
        'Authorization': `${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (methodType === "post") {

        return await axios.post(APINAME, inputJson, { headers: header })
            // return await axios.post(APINAME, inputJson)
            .then((res) => {

                return res

                // if (res.data.HasError === true) {
                //     defaultRes['statusText'] = res.data.Message[0]
                //     defaultRes['status'] = 200
                //     throw defaultRes
                // }
                // else {
                //     return res
                // }

            })
            .catch((E) => {
                if (E.status === 200) {

                    defaultRes['Error'] = E.statusText
                    // alert(E)


                    console.log( 'check',defaultRes)
                    // throw defaultRes
                }
                else {
                    if (E.status === 403) {
                        NavigateToLogin()
                    } else {
                        // alert(E)
                        defaultRes['Error'] = E

                        return defaultRes
                        // throw defaultRes
                    }
                }
            })

    }
    else if (methodType === 'get') {
        return await axios.post(APINAME, {}, { headers: header })
            .then((res) => {

                return res

                // if (res.data.HasError === true) {
                //     defaultRes['statusText'] = res.data.Message[0]
                //     defaultRes['status'] = 200
                //     throw defaultRes
                // }
                // else {
                //     return res
                // }

            })
            .catch((E) => {
                if (E.status === 200) {

                    defaultRes['Error'] = E.statusText
                    // alert(E)
                    return defaultRes
                    // throw defaultRes
                }
                else {

                    // alert(E)
                    defaultRes['Error'] = E
                    return defaultRes
                    // throw defaultRes
                }
            })
    }
}

