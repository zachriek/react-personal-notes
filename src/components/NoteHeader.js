import React from 'react';
import NoteSearchInput from './NoteSearchInput';

const NoteHeader = ({ searchNote }) => {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearchInput searchNote={searchNote} />
        </div>
    );
};

export default NoteHeader;
