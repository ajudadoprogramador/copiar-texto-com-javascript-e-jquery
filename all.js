$(function(){
    $('button').click(function() {
        $('input').select();
        var copiar = document.execCommand('copy');
        if(copiar){
            alert('Copiado');
        }else {
            alert('Erro ao copiar, seu navegador pode não ter suporte a essa função.');
        };
        return false;
    });
});
