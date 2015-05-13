function criarSugestao() {
	var inputSugestao = $("[type=text]");
	var sugestao = inputSugestao.val();
	
	if(sugestao=="")
		alert("Por favor, informe uma sugestão!");
	else
	{
		var nomeSugestao = $("<span>").addClass("sugestao").text(sugestao);
		
		nomeSugestao.addClass("novoitem");
		
		var votos = $("<span>").addClass("votos").text("1 voto");
		$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes");
		inputSugestao.val("").focus();		
	}
}

$("[type=button]").click(criarSugestao);

$("[type=text]").keyup(function(event){
	if(event.keyCode==13)
		criarSugestao();
});

$(".sugestoes").on("dblclick", "li", function(event) {
	$(this).remove();
});