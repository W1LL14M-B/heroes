import { useReducer } from "react"
import { AuthContex } from "./AuthContex"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


/* const initialState = {
    logged: false,
} */

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return {
        logged: !!user,
        user: user
    }
}


const AuthProvider = ({ children }) => {

    const [ authState, dispath ] =  useReducer(authReducer, {}, init);

const login = ( name = '') => {

const user = { id: 'ABC', name}

    const action = { 
        type: types.login,
        payload: user
     }

     localStorage.setItem('user', JSON.stringify( user) );



dispath(action);
  
}

const logout = () => {
    localStorage.removeItem("user"); // Elimina el usuario del localStorage

    const action = {
        type: types.logout,
    };

    dispath(action); // Dispara la acción para limpiar el estado
};

    return (
        <AuthContex.Provider value={{
            ...authState, 
            login: login,
            logout: logout, // Asegúrate de pasar la función logout                       
        }}>
            {children}
 
        </AuthContex.Provider>
    )
}

export default AuthProvider