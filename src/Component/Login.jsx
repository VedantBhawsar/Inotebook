import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/noteContext'
import Student from '../img/Student.gif'

const Login = () => {
    const context = useContext(NoteContext)
    const { Login, AuthToken } = context
    const [User, setUser] = useState({ email: '', password: '' })
    const handleLogin = (e) => {
        e.preventDefault()
        Login(User.email, User.password)

    }
    const onChange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value })
    }
    return (
        <div className='loginpage'>
            <div>
                <img height={'100%'} width={"100%"} src={Student} alt="" />
            </div>
            <div>
                <form className='container my-4'>
                    <div className="mb-4 ">
                        <h4 for="exampleInputEmail1" className="form-label">Email ID</h4>
                        <input type="email" className="form-control" placeholder='email id' name='email' onChange={onChange} />
                    </div>

                    <div className="mb-4 ">
                        <h4 for="exampleInputEmail1" className="form-label">Password</h4>
                        <input type="password" className="form-control" placeholder='password' name='password' onChange={onChange} />
                        <div style={{ display: "flex", gap: "0.5em", alignContent: 'center' }}>
                            <input type="checkbox" name="" id="" />
                            <p>Save Details</p>
                        </div>
                    </div> <button type="submit" className="btn btn-success" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login