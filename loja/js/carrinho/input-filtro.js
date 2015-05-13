var $ul = document.querySelector("#carrinho");
var naoNumerico = /\D/g

$ul.addEventListener("input", function (event) {
		if(event.target.tagName=="INPUT" && naoNumerico.test(this.value))
			event.target.value=event.target.value.replace(naoNumerico,"");
			event.preventDefault();
		});

/* for (var i=0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function (event) {
		if(naoNumerico.test(this.value))
			this.value=this.value.replace(naoNumerico,"");
	});
} */