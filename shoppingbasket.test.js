const ShoppingBasket = require('./shoppingbasket')

const marsBar = { getPrice: () => 4.99 };
const skittles = { getPrice: () => 3.99 };

describe('ShoppingBasket', () => {
  describe('getTotalPrice', () => {
    it('begins with a value of zero', () => {
      basket = new ShoppingBasket();
      expect(basket.getTotalPrice()).toEqual(0);
    })
    it('returns the price of one candy added to the basket', () => {
      basket = new ShoppingBasket();
      basket.addItem(marsBar);
      expect(basket.getTotalPrice()).toEqual(4.99);
    })
    it('returns the total value of three items added to the basket', () => {
      basket = new ShoppingBasket();
      basket.addItem(marsBar);
      basket.addItem(skittles);
      basket.addItem(skittles);
      expect(basket.getTotalPrice()).toEqual(12.97);
    })
  })

  describe('getDiscount', () => {
    it('applies a discount of £1 to a basket', () => {
      basket = new ShoppingBasket();
      basket.addItem(marsBar);
      basket.applyDiscount(1);
      expect(basket.getTotalPrice()).toEqual(3.99);
    })
  })
})