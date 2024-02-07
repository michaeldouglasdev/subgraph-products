import { ProductService } from "./services";
import { Resolvers } from "./types";

const productService = new ProductService();

export const resolvers: Resolvers = {
  Query: {
    products: () => {
      return productService.list();
    }
  }
}