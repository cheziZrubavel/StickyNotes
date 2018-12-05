function Note(content, date, time) {
    this.id = new Date().getTime();
    this.content = content;
    this.date = date;
    this.time = time;
}

Note.prototype.validateDate = function() {
    return (!isNaN(new Date(this.date)) && (this.date.length === 10));
}
Note.prototype.validateNote = function() {
    return (this.content && this.content.length > 0 && this.validateDate(this.date));
}
Note.prototype.toLocalStorage = function() {
    window.localStorage.setItem(this.id, JSON.stringify(this));
    return this;
}
Note.prototype.deleteLocalStorage = function() {
    window.localStorage.removeItem(this.id);
}
