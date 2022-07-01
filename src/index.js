const app = require('./app');

const port = '8888';

app.listen(port, () => {
 
}); 

// declarar una clase
class Product {
  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  decreaseSellIn(valor) {
    this.sellIn = this.sellIn - valor
  }
}

// instancio una clas
let product = new Product(5,10)

console.log("Before decreasing")
console.log(product.sellIn)
console.log(product.quality)

product.decreaseSellIn(1)

console.log("After decreasing")
console.log(product.sellIn)
console.log(product.quality)

/*function increaseQuality(number) {} // declaro una función

increaseQuality(3) // invoco, llamo, uso, ejecuto una función
*/