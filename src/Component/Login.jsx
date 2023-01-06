import React from 'react'
import Student from '../img/Student.gif'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='loginpage'>
            <div>
                <img height={'100%'} width={"100%"} src={Student} alt="" />
            </div>
            <div>
                <form className='container my-4'>
                    <div className="mb-4 ">
                        <h4 for="exampleInputEmail1" className="form-label">Email ID</h4>
                        <input type="email" className="form-control" placeholder='email id' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-4 ">
                        <h4 for="exampleInputEmail1" className="form-label">Password</h4>
                        <input type="email" className="form-control" placeholder='password' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{ display: "flex", gap: "0.5em", alignContent: 'center' }}>
                            <input type="checkbox" name="" id="" />
                            <p>Save Details</p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login