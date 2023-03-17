import {AuthContext} from '../hooks/authcontext'
import React  from "react";
export const useLogout=()=>{
    const {dispatch}=React.useContext(AuthContext);
    const logout=()=>{
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT' })
    }
    return {logout}
}