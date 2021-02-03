"use strict";

/* sample of code in ES5

ES5
<script>
        'use strict';

        function A(param1) {
            this.param1 = param1;
        }

        A.prototype.show = function() {
            alert(this.param1);
        };

        let obj1 = new A('text1');
        obj1.show();
    </script>

ES6
class A {
        constructor(param1) {
            this.param1 = param1;
        }

        show() {
            alert(this.param1);
        }
    }

        let obj2 = new A('text2');
        obj2.show();

*/

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price / 100 * 75;
}

let prod = new Product("shoes", 100);
prod.make25PercentDiscount();
console.log("The price is " + prod.price);