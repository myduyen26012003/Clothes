
function backHistory(){
    history.back();
}
// var tang= document.getElementById('tang');
// tang.addEventListener('click',funtiontang());
function funtiontang(){
    var sl=Number(document.getElementById('SL').innerHTML);
    sl++;
    document.getElementById('SL').innerHTML=sl;
}
function funtiongiam(){
    var sl=Number(document.getElementById('SL').innerHTML);
    sl--;
    if(sl>=1){
    document.getElementById('SL').innerHTML=sl;
    }
    else{
        document.getElementById('SL').innerHTML=1;
    }
}