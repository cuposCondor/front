import axios from "axios"
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST"
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR"

//Para decir que se va a hacer la request al backend
export function registerUserRequest(){
    return {
        type:REGISTER_USER_REQUEST,
    }
}

//Para decir que todo bien
export function registerUserRequestSuccess(resultado){
    return {
        type:REGISTER_USER_SUCCESS,
        payload:resultado
    }
}
//Para decir que hubo un error
export function registerUserRequestError(resultado){
    return {
        type:REGISTER_USER_ERROR,
        payload:resultado
    }
}

export function registerUser(userName, name, password){
    let payload = {alias:userName, nombre:name, contrasena:password}
    return (
        (dispatch)=>{
            dispatch(registerUserRequest())
            axios.post(`${process.env.REACT_APP_URL_API}/login/nuevoUsuario`, payload)
            .then(res=>res.hasOwnProperty("error") ? 
            dispatch(registerUserRequestError(res)) :
            dispatch(registerUserRequestSuccess(res)))
            .catch(err => registerUserRequestError(err))
        }
    )
}