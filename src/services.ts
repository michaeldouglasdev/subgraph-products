import { ProductModel } from "./models";

const PRODUCTS: ProductModel[] = [
  {
    sku: 'product-1',
    name: 'Product Name 1',
    price: {
      value: 10,
      label: '10 sub-product'
    }
  },
  {
    sku: 'product-2',
    name: 'Product Name 2',
    price: {
      value: 20,
      label: '20 sub-product'
    }
  },
  {
    sku: 'product-3',
    name: 'Product Name 3',
    price: {
      value: 30,
      label: '30 sub-product'
    }
  }
]

export class ProductService {

  async list(): Promise<ProductModel[]> {
    return new Promise<ProductModel[]>((res) => setTimeout(() => res(PRODUCTS), 3000));

    //return PRODUCTS;
  }

}