// let listElement = document.getElementsByTagName('li'),
//     el = document.getElementById('mypara');

// listElement[0].addEventListener('click', function(){
//     el.className = 'warning';
// });

// listElement[1].addEventListener('click', function(){
//     el.className = 'tip';
// });

// listElement[2].addEventListener('click', function(){
//     el.className = '';
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


// let el = document.getElementById('mypara');

// function setClassTip(event) {
//     el.className = 'tip';
// }

// function setClassWarning(event) {
//     el.className = 'warning';
// }

// function setClear(event) {
//     el.className = '';
// }

// function setClass(event, className) {
//     let el = document.getElementById('mypara');
//     el.className = className;
// }

function setClass(className) {
    let el = document.getElementById('mypara').className = className;
}

document.getElementById('make-warning').addEventListener('click', function(event){
    setClass('warning');
});

document.getElementById('make-tip').addEventListener('click', function(event){
    setClass('tip');
});

document.getElementById('make-normal').addEventListener('click', function(event){
    setClass('');
});

// $(document).ready(function(){
//     $('ul li').on('click', function(){
//         $('li:first-child').addClass('warning');
//         $('li:nth-of-type(2)').addClass('tip');
//         $('li:last-child').addClass('');
//     })
// });