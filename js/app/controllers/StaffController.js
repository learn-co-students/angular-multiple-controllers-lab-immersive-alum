function StaffController() {
  var vm = this;
  vm.name = "Shirley"
  vm.email = "shirleyz9402@yahoo.com"
  vm.phone = "7323069873"

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}


angular
  .module('app')
  .controller('StaffController', StaffController)
