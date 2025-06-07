import { PricingRule } from './models/PricingRule';
import { Product } from './models/Product';
import { productCatalog } from './products';

export const appleTvDeal: PricingRule = {
  apply(items: Product[]): Product[] {
    const result: Product[] = [];
    const grouped = items.filter(i => i.sku === 'atv');
    const others = items.filter(i => i.sku !== 'atv');
    const chargeable = grouped.length - Math.floor(grouped.length / 3);
    result.push(...others);
    for (let i = 0; i < chargeable; i++) {
      result.push(productCatalog['atv']);
    }
    return result;
  },
};

export const ipadBulkDiscount: PricingRule = {
  apply(items: Product[]): Product[] {
    const result: Product[] = [];
    const ipads = items.filter(i => i.sku === 'ipd');
    const others = items.filter(i => i.sku !== 'ipd');
    if (ipads.length > 4) {
      result.push(...ipads.map(() => ({
        sku: 'ipd',
        name: 'Super iPad',
        price: 499.99,
      })));
    } else {
      result.push(...ipads);
    }
    result.push(...others);
    return result;
  },
};
