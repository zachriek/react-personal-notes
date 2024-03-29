import React, { useState } from 'react';

const NoteBodyInput = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [titleLimit] = useState(50);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value.slice(0, titleLimit));
    };

    const handleChangeBody = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '' || body === '') return window.alert('Input tidak boleh kosong!');
        addNote({ title, body });
    };

    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <form onSubmit={handleSubmit}>
                <p className="note-input__title__char-limit">Sisa karakter: {titleLimit - title.length}</p>
                <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={title} onChange={handleChangeTitle} />
                <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={body} onChange={handleChangeBody}></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    );
};

export default NoteBodyInput;
