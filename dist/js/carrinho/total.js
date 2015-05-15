(function(fm){
	var inputs = document.querySelectorAll("#carrinho input");

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("input", function(event) {
			var input = this;
			var li = input.parentNode.parentNode.parentNode;
			var spans = li.querySelectorAll("span");
			var spanValorUnit = spans[0];
			console.log(spanValorUnit.textContent);
			var spanTotal = spans[1];
			var qtde = input.value;
			var valorUnit = fm.realParaNumber(spanValorUnit.textContent);
			console.log(valorUnit);
			var novoTotal = qtde * valorUnit;
			spanTotal.textContent = fm.numberParaReal(novoTotal);
		});
	}
})(formataMoeda);
