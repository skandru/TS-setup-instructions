"use strict";
exports.__esModule = true;
var getcoffee_1 = require("./getcoffee");
var SweetSweetClass = (function () {
    function SweetSweetClass() {
        console.log("Even sweeter");
    }
    return SweetSweetClass;
}());
var basil = new SweetSweetClass();
var coffee = new getcoffee_1.MustHaveCoffee();
