## Hanami Angular
This is an Angular app from ground app in nodejs. The API is built with HanamiRB.

One of the many setups you could use.

### To run the app
Create the `public/javascripts/` directory if its missing. The compiled JS file is stored here. Check the `.gitignore` file.

```sh
$ git clone thisrepourl
$ cd vanman-angular
$ npm install
$ gulp
```

Visit `http://localhost:5000` and enjoy.

### Testing
The tests are written in `jasmine` and run by `karma`.

The tests are not ready.

### To help
You can help make it better by submitting pull requests.

I need help with

1. [x] Testing the app in karma-jasmine
1. [ ] Writing better views/templates
1. [ ] Writting better services/directives
1. [ ] and much more...

### Tips for Angular
If you are struggling to understand Angular services vs factory. Remember this:
```js
var app = angular.module('app', [])
// js create object instance
var Person = function (name, age, sex, height, weight, nationality) {
  var person  = this

  person.name = name
  person.age  = age
  ...
}

// services return an **instance**
// it's instantiated with `new` keyword
service = function (a,b,c) {

  this.name = ...   
}

// factories return a **value**
factory = function (a,b,c) {

  // logic, etc ...

  return {
    name: ...
  }
}

// examples
app.service('DashboardService', function ($http, $q) {
  var baseApi   = 'https://api.thecrab.com/v1/'
  var dashboard = this

  var service = function (endpoint) {
    var deferred = $q.defer()

    // $http.get('url', config).then(function successCallback(){...}, function errorCallback(){...})
    // $http.post('url', data, config).then(function successCallback(){...}, function errorCallback(){...})
    $http({
      url: baseApi + endpoint,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      data: { test: 'test' }
    })
    .then(
      function successCallback(response) {
        deferred.resolve(response)
      },
      function errorCallback(response) {
        deferred.reject('Something went wrong!')
      }
    )

    return deferred.promise
  }

  dashboard.vehicles  = service('/vehicles')
  dashboard.locations = service('/locations')
  dashboard.jobs      = service('/jobs')
})

//...
app.factory('DashboardFactory', function ($http, $q) {
  var baseApi  = 'https://api.vanman.com/v1/'

  var service = function (endpoint) {
    var deferred = $q.defer()

    $http({
      url: baseApi + '/' + endpoint,
      method: 'GET'
    })
    .then(
      function successCallback(response) {
        deferred.resolve(response)
      },
      function errorCallback(reason) {
        deferred.reject('Something went wrong!')
      }
    )

    return deferred.promise
  }

  return {
    vehicles: service('/vehicles/onduty'),
    locations: service('/locations')
    jobs: service('/jobs')
  }
})

```
Then you can use this service/factory like we do below

```js
app.controller('DashboardCtrl', function ($scope, DashboardService) {
  var scope = $scope

  scope.jobs     = DashboardService.jobs
  scope.vehicles = DashboardService.vehicles
  scope.company  = {
    name: 'Waddington Parcel Services',
    id: 'kduhqq021n9sdy80',
    phone: '01522 123456',
    dispatcher: 'Joe Di Panto'
  } // DashboardService.company
})

```
