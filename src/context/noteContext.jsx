import { useState } from "react";
import { createContext } from "react";
export const NoteContext = createContext();

const url = "http://localhost:4599/api"

const NoteState = (props) => {
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    const GetNote = async () => {
        const response = await fetch(`${url}/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2I5MDdkYzBmZDI1NjJhOGVkYmM1YSIsImlhdCI6MTY3NDI4NTE4MX0.ytZLaCg4MiyPQCnn22Xq35TW7ed9hzvsPGYS58qlbog'
            },
            referrerPolicy: 'no-referrer',
        })
        await setNotes(response.json())
    }

    // Add a Note
    const AddNote = async (title, description, tag) => {
        console.log("Adding a new note")
        const note = {
            "title": title,
            "desc": description,
            "tag": tag
        };
        const response = await fetch(`${url}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2I5MDdkYzBmZDI1NjJhOGVkYmM1YSIsImlhdCI6MTY3NDI4NTE4MX0.ytZLaCg4MiyPQCnn22Xq35TW7ed9hzvsPGYS58qlbog'
            },
            body: JSON.stringify(note),
        })
        // setNotes(notes.concat(note))
    }

    // Delete a Note
    const DeleteNote = async (id) => {
        // TODO: API Call
        const response = await fetch(`${url}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2I5MDdkYzBmZDI1NjJhOGVkYmM1YSIsImlhdCI6MTY3NDI4NTE4MX0.ytZLaCg4MiyPQCnn22Xq35TW7ed9hzvsPGYS58qlbog'
            }
        })

        console.log("Deleting the note with id" + id);
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
        const response = await fetch(`${url}/notes/updatenote/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2I5MDdkYzBmZDI1NjJhOGVkYmM1YSIsImlhdCI6MTY3NDI4NTE4MX0.ytZLaCg4MiyPQCnn22Xq35TW7ed9hzvsPGYS58qlbog'
            },
            body: JSON.stringify(note),
        })
    }
    const Login = async (email, password) => {
        console.log("Login")
        const user = {
            "email": email,
            "password": password
        }
        const response = await fetch(`${url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        console.log(response.json())
    }

    return (
        <NoteContext.Provider value={{ notes, Login, GetNote, AddNote, DeleteNote, EditNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;