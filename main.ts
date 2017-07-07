import * as $ from "jquery";
import {MustHaveCoffee} from "./getcoffee"
class SweetSweetClass {
     constructor() { 
         console.log("Even sweeter");
         $('body').css('background-color','red');
     }
 }

 let basil = new SweetSweetClass();
 let coffee = new MustHaveCoffee();
