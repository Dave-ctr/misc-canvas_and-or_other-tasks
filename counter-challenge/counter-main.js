let add = document.getElementById('increment');
let subtract = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function() {
    integer += 1;
    int.innerHTML = integer;
});

subtract.addEventListener('click', function() {
    integer -= 1;
    int.innerHTML =integer;
});
