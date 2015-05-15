(function() {
	var $ul = document.querySelector("#carrinho");
	var naoNumerico = /\D/g

	$ul.addEventListener("input", function (event) {
			if(event.target.tagName=="INPUT" && naoNumerico.test(this.value))
				event.target.value=event.target.value.replace(naoNumerico,"");
				event.preventDefault();
			});

})();