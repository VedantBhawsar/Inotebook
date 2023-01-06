import React from 'react'
import PageAbout from '../img/PageAbout.gif'

const Login = () => {
  return (
    <div className='loginpage'>
      <div className='container'>
        <h1>About INoteBook</h1>
        <h5>INoteBook is use to manager your notes on air. It's has authentication so your notes will secured. </h5>
      </div>
      <div>
        <img width={'100%'} src={PageAbout} alt="" />
      </div>
    </div>
  )
}

export default Login