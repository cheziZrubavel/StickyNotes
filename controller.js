function isNumeric(num) {
    return (!isNaN(parseFloat(num)) && isFinite(num));
}

function createNote() {
    var noteContent = document.getElementById("new-note-content").value;
    var noteDate = document.getElementById("new-note-date").value;
    var noteTime = document.getElementById("new-note-time").value;
    return new Note(noteContent, noteDate, noteTime);
}

function clearAll() {
    window.localStorage.clear();
    window.location.reload();
}
