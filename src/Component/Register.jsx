import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoteContext } from '../context/noteContext'
import Student from '../img/Student.gif'

const Register = () => {
    const context = useContext(NoteContext)
    const { Register, AuthToken } = context
    const [User, setUser] = useState({ email: '', password: '' })
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        Register(User.email, User.password, User.name)

        navigate('/');
    }
    const onChange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value })
    }
    return (
        <div className='loginpage' style={{ height: "100vh" }}>
            <div>
                <img height={'100%'} width={"100%"} src={Student} alt="" />
            </div>
            <div>
                <form className='container my-4'>
                    <div className="mb-4 ">
                        <h4 htmlFor="exampleInputEmail1" className="form-label">Name</h4>
                        <input type="email" className="form-control" placeholder='Full Name' name='name' onChange={onChange} />
                    </div>

                    <div className="mb-4 ">
                        <h4 htmlFor="exampleInputEmail1" className="form-label">Email ID</h4>
                        <input type="text" className="form-control" placeholder='email id' name='email' onChange={onChange} />
                    </div>


                    <div className="mb-4 ">
                        <h4 htmlFor="exampleInputEmail1" className="form-label">Password</h4>
                        <input type="password" className="form-control" placeholder='password' name='password' onChange={onChange} />
                        <div style={{ display: "flex", gap: "0.5em", alignContent: 'center' }}>
                            <input type="checkbox" name="" id="" />
                            <p>Save Details</p>
                        </div>
                    </div> <button type="submit" className="btn btn-success" onClick={handleLogin}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register