import { calculateBestPrice, ProductService } from "./services";
import { Resolvers } from "./types";

const productService = new ProductService();

export const resolvers: Resolvers = {
  Query: {
    products: async () => {
      return await productService.list();
    }
  },
  Product: {
    bestPrice: (parent) => {
      return calculateBestPrice(parent);
    }
  }
}