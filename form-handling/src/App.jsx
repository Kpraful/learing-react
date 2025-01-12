import { useState } from 'react'
import { useForm } from 'react-hook-form'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading, isDirty, isSubmitting, isSubmitSuccessful },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    console.log(isLoading, isDirty, isSubmitting, isSubmitSuccessful);
  }

  console.log(watch("username"));

  return (
    <>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='username' {...register("username",{required: true})} type="text" />
      <br />
      <input {...register("password")} placeholder='password' type="password" />
      <br />
      {errors.username && <span style={{color:'red'}}>This field is required</span>}
      <br/>
      <input disabled={isSubmitting} type="submit" value="Submit" />
    </form>
    </>
  )
}

export default App
