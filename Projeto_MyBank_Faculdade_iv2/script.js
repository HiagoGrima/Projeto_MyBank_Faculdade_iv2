setTimeout(function ativaMensagem() {
    document.getElementById('caixatexto').style.visibility = 'visible';}, 3000);

 caixatexto.onclick = function () {
     document.getElementById('caixatexto').style.visibility = 'hidden';
 };
