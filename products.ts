import { Product } from './models/Product';

export const productCatalog: Record<string, Product> = {
  atv: { sku: 'atv', name: 'Apple TV', price: 109.5 },
  ipd: { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  mbp: { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
  vga: { sku: 'vga', name: 'VGA adapter', price: 30.0 },
};
