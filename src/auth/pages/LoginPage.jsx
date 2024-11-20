import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../contex/AuthContex";

export const LoginPage = () => {

  const { login } = useContext(AuthContex)

  const navigate = useNavigate()

  const onLogin = () => {

const lastPath = localStorage.getItem('lastPath') || '/'

    login('William Benavides');


    navigate(lastPath, {
      replace: true,
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary"
        onClick={onLogin}
      >

        Login
      </button>
    </div>
  );
};
