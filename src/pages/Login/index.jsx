import React from 'react'
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext);
  return (
    <div>
        <h1>Login page</h1>
        <button onClick={() => setAuth({user: "Negar", id: 1})}>
            Login
        </button>
        <div>
            {auth?.user ? <div>{auth.user}</div> : null}
        </div>
    </div>
  )
}

export default Login;