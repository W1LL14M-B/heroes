import { useContext } from 'react'
import { AuthContex } from '../auth/contex/AuthContex'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {

   const { logged } = useContext(AuthContex)

  return ( !logged )
  ? children
  : <Navigate to="/marvel"/>

}