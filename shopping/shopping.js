let item = document.getElementById('item'),
    myBtn = document.querySelector('button'),
    ulElement = document.querySelector('ul');
myBtn.addEventListener('click', function(event){
    if(item.value !== ''){
        ulElement.appendChild(createNewListItem(item.value));
    } else {
        alert('Please write something');
    }
    
    item.value = "";
});
function createNewListItem(itemName) {
    let li = document.createElement('li'),
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

item.addEventListener('keyup', function(event){

    // console.log(event.keyCode);
    if(event.keyCode === 13){
        myBtn.click();
    }
});