function OrderFormController($scope){

  $scope.services = [
    {
      name: 'Web Development',
      price: 200,
      active: true
    },{
      name: 'Design',
      price: 400,
      active: false
    },{
      name: 'Integration',
      price: 250,
      active: false
    }, {
      name: 'Training',
      price: 220,
      active: false
    }
  ];

  // helper methods
  $scope.toggleActive = function(service){
    service.active = !service.active;
  }

  $scope.total = function(){
    var total = 0;
    angular.forEach($scope.services, function(service){
      if (service.active){
        total += service.price;
      }
    });
    return total;
  }
}
