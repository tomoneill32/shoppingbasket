const ShoppingBasket = require('./shoppingbasket')

const marsBar = { getPrice: () => '4.99' };

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
  })
})