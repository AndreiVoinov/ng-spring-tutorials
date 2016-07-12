require("file?name=index.html!./index.html");
require("bootstrap/dist/css/bootstrap.css");
require("./main.css");

var angular = require("angular");
var ngResource = require("angular-resource");


console.log(angular);

angular.module("myApp.controllers", []);

angular.module("myApp.services", [])
  .factory("Item", require("./factories/ItemFactory"));

angular.module("myApp", [
  "myApp.controllers",
  "myApp.services",
  ngResource
]);
