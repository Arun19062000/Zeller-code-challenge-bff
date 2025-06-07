import { expect } from 'chai';
import { Checkout } from '../Checkout';
import { appleTvDeal, ipadBulkDiscount } from '../pricingRules';

describe('Zeller Checkout System', () => {
  it('applies 3 for 2 deal on Apple TV', () => {
    const co = new Checkout([appleTvDeal, ipadBulkDiscount]);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.total()).to.equal(249.0);
  });

  it('applies bulk discount on iPads when more than 4', () => {
    const co = new Checkout([appleTvDeal, ipadBulkDiscount]);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).to.equal(2718.95);
  });

  it('does not discount iPads if 4 or less', () => {
    const co = new Checkout([appleTvDeal, ipadBulkDiscount]);
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).to.equal(549.99 * 4);
  });

  it('returns 0 when no items are scanned', () => {
    const co = new Checkout([appleTvDeal, ipadBulkDiscount]);
    expect(co.total()).to.equal(0.00);
  });
});
