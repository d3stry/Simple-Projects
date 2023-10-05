const scrn = document.getElementById('screen');

function dec(){
    let n = scrn.innerText
    let n1 = Number(n)
    if(n1 == 0){
        return scrn.innerText = 0
    }else{
        return scrn.innerText = n1 - 1
    }
}
function inc(){
    let n = scrn.innerText
    let n1 = Number(n)
    return scrn.innerText = n1 + 1
}
function reset(){
    scrn.innerText = 0
}