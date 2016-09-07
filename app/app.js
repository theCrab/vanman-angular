require('angular')
var MainController = require('./controllers/main_controller')

var app = angular.module('app', [])

app.controller('MainController', ['$scope', MainController])
