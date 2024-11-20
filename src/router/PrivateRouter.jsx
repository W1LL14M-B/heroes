import { useContext } from 'react'
import { AuthContex } from '../auth/contex/AuthContex'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRouter = ({children}) => {

   const { logged } = useContext(AuthContex)
   const { pathname, search} = useLocation ();

const lastPath =  pathname + search;
localStorage.setItem('lastPath', lastPath);
console.log('rerender')



  return ( logged )
  ? children
  : <Navigate to="/login"/>

}
