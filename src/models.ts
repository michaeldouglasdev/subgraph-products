export interface ProductModel {
  sku: string;
  name: string;
  price: PriceModel;
}

export interface PriceModel {
  value: number;
  label: string;
}
export interface ProductOfferModel {
  id: string;
  price: PriceModel;
}

export interface ShowcaseModel {
  id: string;
  title: string;
  productsSku: string[];
}