import React from 'react'

const DeleteButton = ({user_id, deletePost}) => {

    const handleDelete = (e) => {
        if (e.target.id) {
            deletePost(e.target.id) 
        }
    }
    
    return (
        <button id={user_id} onClick={handleDelete} className="ui red basic icon right floated button" >
            <i id={user_id} onClick={handleDelete} aria-hidden="true" className="trash icon"></i>
        </button>

    )
}

export default DeleteButton