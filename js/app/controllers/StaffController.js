function StaffController() {
  this.name = 'Sami'
  this.email = 'sami@gmail.com'
  this.phone = '917-555-5566'
}

angular
  .module('app')
  .controller('StaffController', StaffController)