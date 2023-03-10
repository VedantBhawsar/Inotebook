import React, { useContext, useState, useEffect } from 'react'
import { NoteContext } from '../context/noteContext'
import Notes from './Notes'


const FrontPage = () => {
    const context = useContext(NoteContext)
    const { AddNote, GetNote } = context
    const [Note, setNote] = useState({ title: '', desc: '', tag: '' })

    useEffect(() => {
        GetNote()
    }, [])

    const handledNote = (e) => {
        e.preventDefault()
        if (Note.title && Note.desc && Note.tag) {
            AddNote(Note.title, Note.desc, Note.tag)
            alert('Note Updated')
        } else {
            alert('Enter All Field')
        }
        GetNote();
    }
    const onChange = (e) => {
        console.log('animal')
        setNote({ ...Note, [e.target.name]: e.target.value })
    }
    return (
        <div style={{ marginTop: "11vh" }}>
            <h1>Add Note</h1>
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
                    <h4 htmlFor="tag" className="form-label">Tag</h4>
                    <input type="text" className="form-control" placeholder='tag' id="tag" aria-describedby="tag" name='tag' onChange={onChange} />
                </div>
                <button type="submit" onClick={handledNote} className="btn btn-success">Add</button>
            </form>
            <h1>Your Note</h1>
            <Notes />
        </div>
    )
}

export default FrontPage