class ShoppingBasket {
  constructor() {
    this.candies = []
    this.discount = 0
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(candy) {
    return this.candies.push(candy);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }

}

module.exports = ShoppingBasket;