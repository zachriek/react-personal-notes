import React from 'react';

const NoteSearchInput = ({ searchNote }) => {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatan ..." onChange={(e) => searchNote(e.target.value)} />
        </div>
    );
};

export default NoteSearchInput;
