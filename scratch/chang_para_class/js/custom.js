// let listElement = document.getElementsByTagName('li'),
//     paragraphRef = document.getElementById('mypara');

// listElement[0].addEventListener('click', function(){
//     paragraphRef.className = 'warning';
// });

// listElement[1].addEventListener('click', function(){
//     paragraphRef.className = 'tip';
// });

// listElement[2].addEventListener('click', function(){
//     paragraphRef.className = '';
// });

// console.log('My code is running');

// let greet = function(name) {
//     console.log('Hello, ' + name);
// }

// let el = document.getElementById('mypara');

// let setClassTip = function() {
//     el.className = 'tip';
// }
// let setClassWarning = function() {
//     el.className = 'warning';
// }



let el = document.getElementById('mypara');

function setClassTip(event) {
    el.className = 'tip';
}

function setClassWarning(event) {
    el.className = 'warning';
}

function setClear(event) {
    el.className = '';
}