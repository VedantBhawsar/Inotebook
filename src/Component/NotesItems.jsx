import React from 'react'
import { RiEditBoxLine } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'

const NotesItems = (note) => {
    const { tittle, desc, tag, date } = note.notes
    console.log("hello")
    console.log(note)
    return (
        <>
            <div className=" card " style={{ width: "18rem", }}>
                <div className="card-body">
                    <h5 style={{ fontWeight: "600" }} className="card-title">{tittle}</h5>
                    <p className="card-text">{desc}</p>
                    <p>Tag: {tag}</p>
                    <p>Date: {date}</p>
                    <div>
                        <RiEditBoxLine className='mx-2 cursor-pointer' style={{ cursor: "pointer", width: "1.5rem", height: "1.5rem" }} />
                        <MdDelete className='cursor-pointer' style={{ cursor: "pointer", width: "1.5rem", height: "1.5rem", color: "red" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItems