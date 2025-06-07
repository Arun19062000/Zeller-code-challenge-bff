import { Product } from './models/Product';
import { PricingRule } from './models/PricingRule';
import { productCatalog } from './products';

export class Checkout {
  private items: Product[] = [];

  constructor(private pricingRules: PricingRule[]) {}

  scan(sku: string): void {
    const product = productCatalog[sku];
    if (product) this.items.push(product);
  }

  total(): number {
    let finalItems = [...this.items];
    for (const rule of this.pricingRules) {
      finalItems = rule.apply(finalItems);
    }
    return parseFloat(finalItems.reduce((sum, item) => sum + item.price, 0).toFixed(2));
  }
}
