function removeDomItem(element) {
    element.parentNode.removeChild(element);
}

function addDomNote(note) {
    if(!note) note = createNote();
    if(!note.validateNote()) return;
    note.toLocalStorage();
    var noteList = document.getElementById('note-list');
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'note-main');
    // Add close button
    var closeBtn = document.createElement("button");
    closeBtn.setAttribute('class', 'closeButton');
    closeBtn.setAttribute('onclick', 'removeDomItem(event.target.parentNode);');
    closeBtn.appendChild(document.createTextNode("X"));
    mainDiv.appendChild(closeBtn);
    //show content
    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'note-content');
    contentDiv.appendChild(document.createTextNode(note.content));
    mainDiv.appendChild(contentDiv);
   //show date
    var dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'note-date');
    dateDiv.appendChild(document.createTextNode(note.date));
    mainDiv.appendChild(dateDiv);
    //show time
    if(note.time) {
        var timeDiv = document.createElement('div');
        timeDiv.setAttribute('class', 'note-time');
        timeDiv.appendChild(document.createTextNode(note.time));
        mainDiv.appendChild(timeDiv);
    }
    // Append to main note list
    noteList.appendChild(mainDiv);
}

function onPageLoad() {
    for(var i = 0; i < localStorage.length; i++) {
        addDomNote(Object.assign(JSON.parse(localStorage.getItem(localStorage.key(i)), Note)));
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    onPageLoad();
});
