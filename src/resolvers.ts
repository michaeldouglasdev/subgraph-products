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
    bestPrice: (parent, args, context, info) => {

      console.log('parentt', parent);
      console.log('parentt2', parent.price);
      console.log('args', args);
      console.log('context', context);
      console.log('info', info)


      return calculateBestPrice(parent);
    },
    __resolveReference: (parent) => {
      return productService.getBySku(parent.sku);
    }
  }
}