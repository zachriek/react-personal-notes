import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NoteItem from './NoteItem';

const NoteArchived = ({ notes, deleteNote, archiveNote }) => {
    const [archivedNotes, setArchivedNotes] = useState([]);

    useEffect(() => {
        setArchivedNotes(notes.filter((note) => note.archived === true));
    }, [notes]);

    return (
        <>
            <h2>Arsip</h2>
            {archivedNotes.length > 0 ? (
                <div className="notes-list">
                    {archivedNotes.map((note) => (
                        <NoteItem key={note.id} note={note} deleteNote={deleteNote} archiveNote={archiveNote} />
                    ))}
                </div>
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </>
    );
};

export default NoteArchived;
