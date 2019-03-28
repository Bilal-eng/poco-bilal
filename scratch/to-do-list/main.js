let list = document.getElementById('myList'),
    addBtn = document.getElementById('addBtn'),
    taskInput = document.getElementById('taskInput');


function addItem(text) {

    // Create new list item
    let item = document.createElement('li'),
        // Add a text to the list item
        textEl = document.createTextNode(text);
    item.appendChild(textEl);

    // Add a remove button to each item
    let removeEl = document.createElement('span'),
        removeElText = document.createTextNode('\u00D7');
    removeEl.appendChild(removeElText);
    removeEl.className = 'remove';
    removeEl.addEventListener('click', function(){
        list.removeChild(item);
    });

    item.appendChild(removeEl);

    // Toggle ".checked" class on item's click
    item.addEventListener('click', function(){
        item.classList.toggle('checked');
    });

    list.appendChild(item);
}

taskInput.addEventListener('keyup', function(event){
    // Check if the clicked button is Enter
    if(event.keyCode === 13) {
        addBtn.click();
    }
});

// Event that emits when DOM is ready!
window.addEventListener('DOMContentLoaded', function(event) {

    addBtn.addEventListener('click', function(){

        console.log("Button has been clicked");

        if(taskInput.value !== '') {
            addItem(taskInput.value);
        }

        taskInput.value = "";
    });
});