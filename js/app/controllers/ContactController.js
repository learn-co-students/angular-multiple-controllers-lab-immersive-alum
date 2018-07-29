function ContactController() {
  this.name = 'Jon'
  this.email = 'email@email.com'
  this.phone = '555-555-5555'

  this.changeName = () => {
    this.name = 'Kurt'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
