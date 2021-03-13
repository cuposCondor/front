import{REGISTER_USER_REQUEST,REGISTER_USER_ERROR,REGISTER_USER_SUCCESS} from "../actions/register"

const default_register_reducer = {
    solicitando:false,
    resultado:{},
    error:""
}

export default function registerReducer(status=default_register_reducer, action){
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {
                solicitando:true,
                resultado:{},
                error: ""
            }
        case REGISTER_USER_ERROR:
            return {
                solicitando:false,
                resultado: {},
                error:action.payload
            }
        case REGISTER_USER_SUCCESS:
            return {
                solicitando:false,
                resultado: action.payload,
                error: ""
            }
        default:
            return {
                error:"DESCONOCIDO"
            }
    }
}