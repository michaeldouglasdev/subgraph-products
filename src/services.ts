import { PriceModel, ProductModel, ProductOfferModel } from "./models";

const PRODUCTS: ProductModel[] = [
  {
    sku: 'product-1',
    name: 'Product Name 1',
    price: {
      value: 10,
      label: '10 sub-product'
    },
    offers: [],
  },
  {
    sku: 'product-2',
    name: 'Product Name 2',
    price: {
      value: 20,
      label: '20 sub-product'
    },
    offers: [],
  },
  {
    sku: 'product-3',
    name: 'Product Name 3',
    price: {
      value: 30,
      label: '30 sub-product'
    },
    offers: [],
  }
]

export class ProductService {

  list(): ProductModel[] {
    return PRODUCTS;
  }

  getBySku(sku: string): ProductModel {
    return PRODUCTS.find(product => product.sku === sku)!;
  }
}

type DeepPartial<T> = keyof T extends never ? T : {
  [P in keyof T]?: DeepPartial<T[P]>
}

interface CalculateBestPrice {
  price: Pick<PriceModel, 'value'>;
  offers: CalculateBestPriceOffer[];
}

interface CalculateBestPriceOffer {
  price: CalculateBestPriceOfferPrice;
}

interface CalculateBestPriceOfferPrice {
  value: number;
}

export function calculateBestPrice(product: CalculateBestPrice): PriceModel {
  const { offers, price } = product;
  let bestPrice = price;
  offers?.forEach(offer => {

    if(offer.price.value < bestPrice.value) {
      bestPrice = offer.price
    }
  })

  return {
    label: `${bestPrice}`,
    value: bestPrice.value
  }
}
