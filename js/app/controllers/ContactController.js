function ContractController(){
    let vm = this;

    vm.name = 'Matthew Talbot'
    vm.email = 'mdtalbot@gmail.com'
    vm.phone = "2018417463"

    vm.changeName = function (){
        vm.name = "Duncan Talbot, IV"
    }
}

angular
    .module('app')
    .controller('ContactController', ContractController)