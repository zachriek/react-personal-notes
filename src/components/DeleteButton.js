import React from 'react';

const DeleteButton = ({ id, deleteNote }) => {
    return (
        <button className="note-item__delete-button" onClick={() => deleteNote(id)}>
            Delete
        </button>
    );
};

export default DeleteButton;
