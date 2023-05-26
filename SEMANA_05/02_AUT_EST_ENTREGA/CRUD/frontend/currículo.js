$(document).ready(function() {
  $('#submitBtn').click(function() {
    var nome = $('#nome').val();
    var idade = $('#idade').val();
    var cidade = $('#cidade').val();
    
    var mensagem = "Nome: " + nome + "<br>" +
                   "Idade: " + idade + "<br>" +
                   "Cidade: " + cidade;
    
    $('#resultado').html(mensagem);
  });
});