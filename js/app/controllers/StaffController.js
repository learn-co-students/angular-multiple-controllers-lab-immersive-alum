function StaffController(){
    let vm = this;

    vm.name = "Totally Not Me"
    vm.email = "not@me.org"
    vm.phone = '9736357067'

    this.changeName = function(){
        vm.name = "Most Definitely Not Me"
    }
}

angular
    .module('app')
    .controller('StaffController', StaffController)