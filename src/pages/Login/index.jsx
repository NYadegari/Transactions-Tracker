import React from 'react'
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"
import { useRef } from 'react'
import styles from './login.module.scss'
import * as Yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object({
  username: Yup.string().required().min(3),
  password: Yup.string().required().min(4).max(22),
  email: Yup.string().required().email()
})

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const { register , handleSubmit , formState: {errors , isValid} } = useForm({resolver: yupResolver(validationSchema)});

  return (
    <div className={styles.body}>
        <h1>Login page</h1>
        <div className={styles.form}>
          <form action=""
          onSubmit={handleSubmit((value) => {
            console.log("value", value, errors);
            setAuth({ user: value.username, email: value.email})
          })}
          >
            <div className={styles.inputs}>
              <label htmlFor="email">Email</label>
              <input {...register("email")} id='email' type="text" />
              {errors.email && <span className='text-red-700 text-xs'>{errors.email.message}</span>}
              <label htmlFor="username">Username</label>
              <input {...register("username")} id='username' type="text" />
              {errors.username && <span className='text-red- 700 text-xs'>{errors.username.message}</span>}
              <label htmlFor="password">Password</label>
              <input {...register("password")} id='password' type="password"/>
              {errors.password && <span className='text-red-700 text-xs'>{errors.password.message}</span>}
            </div>
            <button     onClick={()=>console.log("clicked")}>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Login;