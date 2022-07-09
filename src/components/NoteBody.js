import React from 'react';
import NoteBodyInput from './NoteBodyInput';
import NoteActive from './NoteActive';
import NoteArchived from './NoteArchived';

const NoteBody = ({ notes, addNote, deleteNote, archiveNote }) => {
    return (
        <div className="note-app__body">
            <NoteBodyInput addNote={addNote} />
            <NoteActive notes={notes} deleteNote={deleteNote} archiveNote={archiveNote} />
            <NoteArchived notes={notes} deleteNote={deleteNote} archiveNote={archiveNote} />
        </div>
    );
};

export default NoteBody;
