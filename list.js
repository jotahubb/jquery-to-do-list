$(document).ready(function() {
    $('#meu-form').on('submit', function(e){
        e.preventDefault();  // Corrigir o método preventDefault
        
        const atividade = $('#nome-atividade').val();
        if (atividade.trim() !== '') {  // Verificar se o campo não está vazio
            const novoItem = $('<li></li>');
            const span = $('<span></span>').text(atividade);
            const checkbox = $('<input type="checkbox">');
            
            checkbox.on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).parent().addClass('completed');
                } else {
                    $(this).parent().removeClass('completed');
                }
            });

            novoItem.append(checkbox).append(span);
            $('#lista-atividades').append(novoItem);  // Adicionar o novo item à lista
            $('#nome-atividade').val('');  // Limpar o campo de entrada
        }
    });
});

