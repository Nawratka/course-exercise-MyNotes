const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.delete-all');
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const categoryInput = document.querySelector('#category');
const textInput = document.querySelector('#text');
const save = document.querySelector('.save');
const cancel = document.querySelector('.cancel');
const errorText = document.querySelector('.error');

let selectedValue;
let noteName;
let noteText;
let id = 1;

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	categoryInput.value = 0;
	textInput.value = '';
	errorText.style.visibility = 'hidden';
};

const saveNote = () => {
	if (categoryInput.value === '0' || textInput.value === '') {
		errorText.style.visibility = 'visible';
	} else {
		errorText.style.visibility = 'hidden';
		const newNote = document.createElement('div');
		newNote.classList.add('note');
		newNote.innerHTML = `
	<div class="note-header">
                <h3 class="note-title">${noteName} #${id}</h3>
                <button class="delete-note" onclick="deleteSingleNote(id)"><i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">${textInput.value}</div>
        </div>
	`;

		switch (noteName) {
			case 'Zakupy':
				newNote.style.backgroundColor = '#faca93';
				break;
			case 'Praca':
				newNote.style.backgroundColor = 'pink';
				break;
			case 'Inne':
				newNote.style.backgroundColor = 'violet';
				break;
		}

		noteArea.append(newNote);
		id++;
		closePanel();
	}
};

const selectValue = (selectedValue) => {
	selectedValue = categoryInput.selectedIndex;
	switch (selectedValue) {
		case 1:
			noteName = 'Zakupy';
			break;
		case 2:
			noteName = 'Praca';
			break;
		case 3:
			noteName = 'Inne';
			break;
	}
};

const deleteAllNotes = () => {
	noteArea.innerHTML = '';
}

const deleteSingleNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.remove(noteToDelete);
}

addBtn.addEventListener('click', openPanel);
cancel.addEventListener('click', closePanel);
save.addEventListener('click', saveNote);
deleteAllBtn.addEventListener('click', deleteAllNotes)