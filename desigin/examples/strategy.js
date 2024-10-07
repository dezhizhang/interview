/*
 * :file description:
 * :name: /desigin/examples/strategy.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 11:09:43
 * :last editor: 张德志
 * :date last edited: 2024-10-07 11:09:44
 */
// 定义不同的策略
class RegularStrategy {
  calculate(price) {
    return price; // 正常价格，无折扣
  }
}

class SaleStrategy {
  calculate(price) {
    return price * 0.9; // 打9折
  }
}

class PremiumStrategy {
  calculate(price) {
    return price * 0.8; // 打8折
  }
}

// Context，负责根据不同策略进行计算
class PriceContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculatePrice(price) {
    return this.strategy.calculate(price);
  }
}

// 使用策略模式
const price = 100;
const priceContext = new PriceContext(new RegularStrategy());

console.log(priceContext.calculatePrice(price)); // 输出：100

// 切换到打折策略
priceContext.setStrategy(new SaleStrategy());
console.log(priceContext.calculatePrice(price)); // 输出：90

// 切换到高级会员折扣策略
priceContext.setStrategy(new PremiumStrategy());
console.log(priceContext.calculatePrice(price)); // 输出：80
