import { useReducer } from "react"
import { AuthContex } from "./AuthContex"
import { authReducer } from "./authReducer"


const initialState = {
    logged: false,
}


const AuthProvider = ({ children }) => {

    const [ authstate, dispath ] =  useReducer(authReducer, initialState);

    return (
        <AuthContex.Provider value={{}}>
            {children}

        </AuthContex.Provider>
    )
}

export default AuthProvider