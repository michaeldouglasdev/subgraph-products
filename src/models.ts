export interface ProductModel {
  sku: string;
  name: string;
  price: ProductPriceModel;
}

export interface ProductPriceModel {
  value: number;
  label: string;
}