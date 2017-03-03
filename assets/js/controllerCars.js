angular.module("api-car", []);
angular.module("api-car").controller("carrosSelecionadosCtrl", function($scope){
	$scope.carSelected = [];
	$scope.selecionado = "";
	$scope.carros = [
			{nome:'Ford',cor:'black',color_id:5,id:1,ano:"2016"},
			{nome:'Corsa',cor:'purple',color_id:5,id:2,ano:"2016"},
			{nome:'Fusca', cor:'blue',color_id:3,id:3,ano:"1770"},
			{nome:'Brasilia',cor:'yellow',color_id:2,id:4,ano:"2018"},
			{nome:'Ferrari',cor:'yellow',color_id:2,id:5,ano:"2017"},
			{nome:'Brasilia',cor:'blue',color_id:3,id:6,ano:"2016"}
	];
	
	$scope.titulo = "Listagem de Carros - Projeto 2017";
	$scope.selectedCar = function(car, select){
		console.log(car);
		console.log(select);
		if(select == true){
			$scope.carSelected.push(car);
			console.log("deu true",$scope.carSelected);
		}else{
			for(var k in $scope.carSelected){
				if($scope.carSelected[k].id == car.id){
					$scope.carSelected.splice(k,1);
					console.log("deu false",$scope.carSelected);
				}
			}
		}		
	};

	$scope.mover = function(){
		$scope.showCarSelected = [];
		for(var w in $scope.carSelected){
			$scope.showCarSelected.push($scope.carSelected[w]);
		}
	};	


	$scope.myFunction =  function(valorCor){
		console.log("lafora", valorCor);
		$scope.colorsOfCar = [];
		for(var j in $scope.carros){
			if($scope.carros[j].cor == valorCor.cor){
				$scope.colorsOfCar.push($scope.carros[j]);
			}
		}
		
	};

});