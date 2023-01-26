import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { NoteContext } from '../context/noteContext'

const Proected = ({ children }) => {
    const context = useContext(NoteContext)
    const { AuthToken } = context

    if (!AuthToken) {
        return <Navigate to={'/login'} replace />
    } else {
        return children
    }
}

export default Proected