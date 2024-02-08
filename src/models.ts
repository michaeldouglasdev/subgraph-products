export interface ProductModel {
  sku: string;
  name: string;
  price: PriceModel;
  offers?: ProductOfferModel[];
  bestPrice?: PriceModel;
}

export interface PriceModel {
  value: number;
  label: string;
}
export interface ProductOfferModel {
  id: string;
  price: PriceModel;
}

