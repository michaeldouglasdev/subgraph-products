import { ProductService } from "./services";
import { Resolvers } from "./types";

const productService = new ProductService();

export const resolvers: Resolvers = {
  Query: {
    products: async () => {
      return await productService.list();
    },
    listShowcase: async () => {
      return productService.listShowcase();
    },
    heavyField: async (parent, { arg1, arg2}) => {
      return await new Promise(res => setTimeout(() => res("Too Heavy"), 3000 ));
    }
  },
  Product: {
    __resolveReference: async (parent, args, context) => {
      const product = await productService.getBySku(parent.sku);
      return product
    }
  }
}