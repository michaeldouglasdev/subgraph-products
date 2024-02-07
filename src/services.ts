import { ProductModel } from "./models";

const PRODUCTS: ProductModel[] = [
  {
    sku: 'product-1',
    name: 'Product Name 1',
  },
  {
    sku: 'product-2',
    name: 'Product Name 2',
  },
  {
    sku: 'product-3',
    name: 'Product Name 3',
  }
]

export class ProductService {

  async list(): Promise<ProductModel[]> {
    return new Promise<ProductModel[]>((res) => setTimeout(() => res(PRODUCTS), 3000));

    //return PRODUCTS;
  }

}