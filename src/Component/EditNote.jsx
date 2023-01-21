import React, { useContext, useState, useEffect } from 'react'
import { NoteContext } from '../context/noteContext'
import Notes from './Notes'
import { Link } from 'react-router-dom'

const EditNote = () => {
    const context = useContext(NoteContext)
    const { EditNote } = context
    const [Note, setNote] = useState({ title: '', desc: '', tag: '' })

    const handledNote = (e) => {
        e.preventDefault()
        EditNote(Note._id, Note.title, Note.desc, Note.tag)
        alert('Note Updated')
        window.location.assign('http://localhost:3000')
    }

    const onChange = (e) => {
        setNote({ ...Note, [e.target.name]: e.target.value })
        // setNote(..note)
    }
    return (
        <div style={{ marginTop: "11vh" }}>
            <h1>Update Note</h1>
            <form className='container my-4' >
                <div className="mb-4 ">
                    <h4 htmlFor="title" className="form-label">Title</h4>
                    <input type="text" className="form-control" placeholder='Title' id="title" name='title' aria-describedby="title" onChange={onChange} />
                </div>

                <div className="mb-4 ">
                    <h4 htmlFor="desc" className="form-label">Description</h4>
                    <input type="text" className="form-control" placeholder='Desc' id="desc" aria-describedby="desc" name='desc' onChange={onChange} />
                </div>

                <div className="mb-4 ">
                    <h4 htmlFor="tag" className="form-label">tag</h4>
                    <input type="text" className="form-control" placeholder='tag' id="tag" aria-describedby="tag" name='tag' onChange={onChange} />
                </div>
                <button type="submit" onClick={handledNote} className="btn btn-success">Update</button>
            </form>
        </div>
    )
}

export default EditNote