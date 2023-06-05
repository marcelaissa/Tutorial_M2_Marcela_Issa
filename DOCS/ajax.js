$(document).ready(() => {
    $.ajax({
        url: './meuNome.txt',
        type: 'GET',
        dataType: 'text',
        async: true,
        success: (data) => {

            $('#meuNome').html(data);
        }
    })
});