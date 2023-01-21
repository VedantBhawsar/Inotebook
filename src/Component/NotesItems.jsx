import React from 'react'
import { RiEditBoxLine } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NotesItems = (props) => {
    const { _id, title, desc, tag, date } = props.notes
    return (
        <>
            <div className=" card " style={{ width: "18rem", }}>
                <div className="card-body">
                    <h5 style={{ fontWeight: "600" }} className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p>Tag: {tag}</p>
                    <p>Date: {date}</p>
                    <div>
                        <Link to={'/editnote'}>
                            <RiEditBoxLine className='mx-2 cursor-pointer'  style={{ cursor: "pointer", width: "1.5rem", height: "1.5rem" }} />
                        </Link>
                        <MdDelete onClick={() => { props.DeleteNote(_id) }} className='cursor-pointer' style={{ cursor: "pointer", width: "1.5rem", height: "1.5rem", color: "red" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItems