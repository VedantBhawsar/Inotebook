import React from 'react'
import Notes from './Notes'

const FrontPage = () => {

    return (
        <div className='mt-2'>
            <h1>Add Note</h1>
            <form className='container my-4'>
                <div className="mb-4 ">
                    <h4 for="exampleInputEmail1" className="form-label">Title</h4>
                    <input type="text" className="form-control" placeholder='Title' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-4 ">
                    <h4 for="exampleInputEmail1" className="form-label">Description</h4>
                    <input type="text" className="form-control" placeholder='Desc' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
            <h1>Your Note</h1>
            <Notes />
        </div>
    )
}

export default FrontPage