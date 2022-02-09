let input = document.getElementById('input');

function display(n){
    input.value += n;
}
function reset(){
    input.value = '';
}
function del(){
    let str = input.value;
    input.value = str.substr(0,str.length-1);
}
function ans(){
    let x = eval(input.value);
    input.value = x;
}
