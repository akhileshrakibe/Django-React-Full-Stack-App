import React from 'react'
import "../Styles/Note.css"

function Note({note, onDelete}) {
    const formattedDate = new Date(note.created_at).toLocaleString('en-IN')

  return (
    <>
        <div className='note-container'>
            <p className='note-title'>{note.title}</p>
            <p className='note-title'>{note.content}</p>
            <p className='note-data'>{formattedDate}</p>
            <button className='delete-button' onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    </>
  )
}

export default Note