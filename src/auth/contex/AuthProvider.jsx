import { useReducer } from "react"
import { AuthContex } from "./AuthContex"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return {
        logged: !!user,
        user: user
    }
}


const AuthProvider = ({ children }) => {

    const [ authState, dispath ] =  useReducer(authReducer, initialState, init);

const login = ( name = '') => {



    const action = { 
        type: types.login,
        payload: {
            id: 'ABC',
            name: name
        }
     }



dispath(action);
  
}

const logout = () => {
}

    return (
        <AuthContex.Provider value={{
            ...authState, 
            login: login                        
        }}>
            {children}
 
        </AuthContex.Provider>
    )
}

export default AuthProvider