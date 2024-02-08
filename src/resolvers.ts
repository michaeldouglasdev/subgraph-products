import { calculateBestPrice, ProductService } from "./services";
import { Resolvers } from "./types";

const productService = new ProductService();

export const resolvers: Resolvers = {
  Query: {
    products: () => {
      return productService.list();
    }
  },
  Product: {
    bestPrice: (parent) => {

      console.log('parentt', parent)
      return calculateBestPrice(parent);
    }
  }
}