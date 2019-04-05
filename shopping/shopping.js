const item = document.getElementById('item'),
    myBtn = document.querySelector('button'),
    ulElement = document.querySelector('ul');
item.focus();    
document.querySelector('button').addEventListener('click', function(event){
    const trimmedValue = item.value.trim();
    if(trimmedValue === ''){
        return;
    } 
    ulElement.appendChild(createNewListItem(trimmedValue));
    item.value = '';
    myBtn.disabled = true;
    item.focus();
});

/**
 * Create and returns an 'li' element for inclusion in the shopping list.
 * 
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
    const li = document.createElement('li'),
        span = document.createElement('span');
        button = document.createElement('button'),
        space = document.createTextNode(' ');
    
    span.innerText = itemName;
    button.innerText = 'Delete';

    li.appendChild(span);
    li.appendChild(space);
    li.appendChild(button);

    // Add a Click handler that logs the click here
    button.addEventListener('click', function(e){
        li.remove();
    });
    return li;
}

// item.addEventListener('keyup', function(event){
//     if(event.key === 'Enter'){
//         document.querySelector('button').click();
//     }
// });

item.addEventListener('keyup', function(event){
    // if(event.key === 'Enter'){
    //     document.querySelector('button').click();
    // }
    const trimmedValue = item.value.trim();
    myBtn.disabled = trimmedValue === '';

    if(trimmedValue === '') {
        return;
    }

    if(event.key !== 'Enter') {
        return;
    }

    ulElement.appendChild(createNewListItem(trimmedValue));
    item.value = '';
    myBtn.disabled = true;
});


