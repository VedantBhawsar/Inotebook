import { useEffect, useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const NoteContext = createContext();

const url = "http://localhost:4599/api"

const NoteState = (props) => {
    const notesInitial = [{
    }]
    const [notes, setNotes] = useState(notesInitial)
    const [AuthToken, setAuthToken] = useState()
    const [NoteInfo, setNoteInfo] = useState('')

    useEffect(() => {
        const data = localStorage.getItem('authtoken')
        setAuthToken(data)
    }, [])


    const GetNote = async () => {
        try {
            const response = await fetch(`${url}/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': AuthToken
                },
                referrerPolicy: 'no-referrer',
            })
            const data = await response.json()
            setNotes(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Add a Note
    const AddNote = async (title, description, tag) => {

        const note = {
            "title": title,
            "desc": description,
            "tag": tag
        };
        try {
            const response = await fetch(`${url}/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': AuthToken
                },
                body: JSON.stringify(note),
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Delete a Note
    const DeleteNote = async (id) => {
        // TODO: API Call
        try {
            const response = await fetch(`${url}/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': AuthToken
                }
            })
        } catch (error) {
            console.log(error)
        }
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    // Edit a Note
    const EditNote = async (_id, title, description, tag) => {
        const note = {
            "title": title,
            "desc": description,
            "tag": tag
        };
        try {
            const response = await fetch(`${url}/notes/updatenote/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': AuthToken
                },
                body: JSON.stringify(note),
            })
            return <Navigate to='/about' />;
        } catch (error) {
            console.log(error)
        }
    }

    const Login = async (email, password) => {
        const user = {
            "email": email,
            "password": password
        }
        try {

            const response = await fetch(`${url}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            const userinfo = await (response.json())
            setAuthToken(userinfo.authtoken)
            localStorage.setItem('authtoken', userinfo.authtoken);
        } catch (error) {
            console.log(error)
        }
    }

    const Logout = () => {
        setAuthToken()
        localStorage.clear()
    }

    const noteinfo = (id) => {
        setNoteInfo(id)
    }

    return (
        <NoteContext.Provider value={{ notes, Logout, Login, noteinfo, setNoteInfo, NoteInfo, AuthToken, GetNote, AddNote, DeleteNote, EditNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;