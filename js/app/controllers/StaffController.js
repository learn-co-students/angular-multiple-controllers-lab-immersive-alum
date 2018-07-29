function StaffController() {
  this.name = 'Bobby'
  this.email = 'bobby@gmail.com'
  this.phone = '777-777-7777'

  this.changeName = function () {
		this.name = 'Steven';
	}
}

angular
  .module('app')
  .controller('StaffController', StaffController)
