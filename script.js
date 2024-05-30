
document.getElementById('addNoteButton').addEventListener('click', addNote);

function addNote() {
    const noteText = document.getElementById('noteText').value;
    const noteColor = document.getElementById('noteColor').value;

    if (noteText.trim() === '') {
        alert('Note cannot be empty');
        return;
    }

    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = noteColor;

    const textarea = document.createElement('textarea');
    textarea.value = noteText;
    note.appendChild(textarea);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => note.remove());
    note.appendChild(deleteButton);

    document.getElementById('notesContainer').appendChild(note);

    // Clear the input fields
    document.getElementById('noteText').value = '';
    document.getElementById('noteColor').value = '#008000';
}
