function showHide(targetId, hideId, showId) {

    let elTarget = document.getElementById(targetId),
        elHide = document.getElementById(hideId),
        elShow = document.getElementById(showId);

        elShow.className = 'hide';
        
        elHide.addEventListener('click', function(ev){
        elTarget.className = 'hide';
        elHide.className = 'hide';
        elShow.className = '';
    });
    
    document.getElementById(showId).addEventListener('click', function(ev){
        elTarget.className = '';
        elHide.className = '';
        elShow.className = 'hide';
    });
}

showHide('shopping-list', 'hide-list', 'show-list');