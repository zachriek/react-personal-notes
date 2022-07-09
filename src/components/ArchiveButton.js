import React from 'react';

const ArchivedButton = ({ note, archiveNote }) => {
    let { archived, id } = note;

    return (
        <>
            {archived ? (
                <button className="note-item__archive-button" onClick={() => archiveNote(archived, id)}>
                    Pindahkan
                </button>
            ) : (
                <button className="note-item__archive-button" onClick={() => archiveNote(archived, id)}>
                    Arsipkan
                </button>
            )}
        </>
    );
};

export default ArchivedButton;
