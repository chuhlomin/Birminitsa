function removeSelected(element) {
    element.classList.remove('selected');
}

function addSelected(element) {
    element.classList.add('selected');
}

function show(language) {

    switch (language) {
        case 'english':
            Array.prototype.map.call(document.getElementsByClassName('english'), addSelected);
            Array.prototype.map.call(document.getElementsByClassName('russian'), removeSelected);
            break;
        case 'russian':
            Array.prototype.map.call(document.getElementsByClassName('english'), removeSelected);
            Array.prototype.map.call(document.getElementsByClassName('russian'), addSelected);
            break;
    }

}