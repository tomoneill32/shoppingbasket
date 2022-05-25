class ShoppingBasket {
  constructor() {
    this.total = 0
  }

  addItem(candy) {
    this.total += candy.getPrice();
  }

  getTotalPrice() {
    return this.total;
  }

}

module.exports = ShoppingBasket;