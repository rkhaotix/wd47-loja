function RecomendacaoController($scope, $http) {
	setInterval(function(){
		$http.jsonp("http://mirrorfashion.caelum.com.br/produtos?callback=JSON_CALLBACK")
		.success(function(retorno){
			$scope.produtos=retorno.produtos;
		});
	}, 3000);
}