var formataMoeda = (function(){
		var simbolo = "R$ ";

		return {
		numberParaReal : function(numero) {
			return simbolo + numero.toFixed(2).replace(".", ",");
		},

		realParaNumber : function(texto) {
			return parseFloat(texto.replace(simbolo, "").replace(",", "."));
		}
	};
})();