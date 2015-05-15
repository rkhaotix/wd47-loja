(function(){
	var aviso = document.querySelector(".aviso");
	var botao = document.createElement("button");
	botao.id="botaoaviso";
	botao.textContent="Esconder";
	aviso.parentNode.insertBefore(botao, aviso);



	botao.addEventListener("click", function(event) {
		aviso.classList.toggle("invisivel");
		if(aviso.classList.contains("invisivel")) {
			this.textContent = "Aviso";
		} else {
			this.textContent = "Esconder";
		}
	});	
})();
