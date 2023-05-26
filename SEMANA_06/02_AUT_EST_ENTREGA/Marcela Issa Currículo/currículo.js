$(document).ready(function() {
  // Adicionar habilidade técnica
  $("#btnAdicionar").click(function() {
      var novaHabilidade = $("#novaHabilidade").val();
      if (novaHabilidade !== "") {
          var novaHabilidadeItem = "<li>" + novaHabilidade + "</li>";
          $("#habilidades").append(novaHabilidadeItem);
          $("#novaHabilidade").val("");
      }
  });
});