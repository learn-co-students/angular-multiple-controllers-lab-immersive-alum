function StaffController() {
    var vm = this;
    vm.name = 'sc name';
    vm.email = 'sc email';
    vm.phone = 'sc phone';
}

angular
    .module('app')
    .controller('StaffController', StaffController);