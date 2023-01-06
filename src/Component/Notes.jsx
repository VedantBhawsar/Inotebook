import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../context/noteContext'
import NotesItems from './NotesItems'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setnotes } = context
    return (
        <div className='col ' style={{}}>
            <div className="container row" style={{ marginX: "0", gap: "2rem" }}>
                {
                    notes.map((note) => {
                        return (
                            <NotesItems notes={note} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Notes