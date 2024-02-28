import { Datasource } from "./datasource";
import { PriceModel, ProductModel, ShowcaseModel } from "./models";

const datasource = new Datasource();

export class ProductService {

  async list(): Promise<ProductModel[]> {
    return await datasource.get('/products')
  }

  async getBySku(sku: string): Promise<ProductModel> {
    return await datasource.get(`/products/${sku}`);
  }

  async listShowcase(): Promise<ShowcaseModel[]> {
    const showcase =  await datasource.get<ShowcaseModel>(`/showcase`);
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
    label: `${bestPrice.value}`,
    value: bestPrice.value
  }
}
