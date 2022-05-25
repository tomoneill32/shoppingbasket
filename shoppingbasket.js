class ShoppingBasket {
  constructor() {
    this.total = 0
  }

  addItem() {
    this.total += 4.99;
  }

  getTotalPrice() {
    return this.total;
  }

}

module.exports = ShoppingBasket;