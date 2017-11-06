var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var currentItemNumber = document.getElementsByTagName('li').length;
    element.innerHTML = "item " + currentItemNumber;
    if ((currentItemNumber % 2) === 0 ) {
        element.style.color = "red";
    }
    list.appendChild(element);
})