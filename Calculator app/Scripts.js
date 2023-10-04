const display = document.getElementById('display');
function calcScreen(num){
    display.innerText += num
}
function del(){
    display.innerText = '😎';
}
function del1(){
    return display.innerText = display.innerText.slice(0, -1);
}
function symbols(i){
    display.innerText += i
}
function equal(){
    let evl1 = display.innerText.replace('😎', '');
    let result = eval(evl1);
    return display.innerText = '😎' + result;
}