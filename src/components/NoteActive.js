import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';

const NoteActive = ({ notes, deleteNote, archiveNote }) => {
    const [activeNotes, setActiveNotes] = useState([]);

    useEffect(() => {
        setActiveNotes(notes.filter((note) => note.archived === false));
    }, [notes]);

    return (
        <>
            <h2>Catatan Aktif</h2>
            {activeNotes.length > 0 ? (
                <div className="notes-list">
                    {activeNotes.map((note) => (
                        <NoteItem key={note.id} note={note} deleteNote={deleteNote} archiveNote={archiveNote} />
                    ))}
                </div>
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </>
    );
};

export default NoteActive;
