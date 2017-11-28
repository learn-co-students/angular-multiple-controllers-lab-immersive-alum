
function ContactController() {
    var vm = this;
    vm.name = 'some name';
    vm.email = 'some email';
    vm.phone = 'some phone';

    this.changeName = function () {
        vm.name = 'Something else!'
    };
}

angular
    .module('app')
    .controller('ContactController', ContactController);