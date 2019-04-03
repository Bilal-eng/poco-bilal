console.log('clicker.js is running');

let p = document.getElementById('clicker');

p.addEventListener('click', function(ev){
    clicker();
});

function clicker() {
    let ul = document.createElement('ul');

    ul.appendChild(createListItem('List 1'));
    ul.appendChild(createListItem('List 2'));
    ul.appendChild(createListItem('List 3'));

    document.getElementById('body').appendChild(ul);
}

function createListItem(textContent) {
    let li = document.createElement('li');
    li.innerHTML = textContent;
    return li;
}