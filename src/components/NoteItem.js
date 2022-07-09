import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils';

const NoteItem = ({ note, deleteNote, archiveNote }) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={note.id} deleteNote={deleteNote} />
                <ArchiveButton note={note} archiveNote={archiveNote} />
            </div>
        </div>
    );
};

export default NoteItem;
