$("#carrinho li form a").click(function(event) {
	$(this).closest("li").remove();
	event.preventDefault();
});