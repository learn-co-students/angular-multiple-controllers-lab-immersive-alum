function ContactController() {
  var vm = this
  this.name = 'Alla'
  this.email = 'alla@gmail.com'
  this.phone = '917-777-5566'
 
  this.changeName = function () {
    vm.name = 'Alice'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)