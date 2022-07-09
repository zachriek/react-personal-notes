import React from 'react';
import { useState } from 'react';
import NoteHeader from './components/NoteHeader';
import NoteBody from './components/NoteBody';
import { getInitialData } from './utils';

const Notes = () => {
    const [notes, setNotes] = useState(getInitialData);
    const [searchNotes, setSearchNotes] = useState(getInitialData);

    const handleAddNote = ({ title, body }) => {
        setNotes([
            ...notes,
            {
                id: +new Date(),
                title,
                body,
                createdAt: new Date(),
                archived: false,
            },
        ]);
    };

    const handleDeleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const handleArchiveNote = (isArchived, id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        const updatedNote = notes.find((note) => note.id === id);
        isArchived ? setNotes([...newNotes, { ...updatedNote, archived: false }]) : setNotes([...newNotes, { ...updatedNote, archived: true }]);
    };

    const handleSearchNote = (title) => {
        const newNotes = searchNotes.filter((note) => note.title.toString().toLowerCase().includes(title.toLowerCase()));
        setNotes(newNotes);
    };

    return (
        <>
            <NoteHeader searchNote={handleSearchNote} />
            <NoteBody notes={notes} addNote={handleAddNote} deleteNote={handleDeleteNote} archiveNote={handleArchiveNote} />
        </>
    );
};

export default Notes;
