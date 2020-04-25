import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/product.dto';
import { ProductInput } from './inputs/product.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [CreateProductDTO])
  async products() {
    return this.productService.getProducts();
  }

  @Query(() => CreateProductDTO)
  async getProductById(@Args('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Query(() => [CreateProductDTO])
  async getProductByName(@Args('name') name: string) {
    return this.productService.getProductByName(name);
  }

  @Mutation(() => CreateProductDTO)
  async createProduct(@Args('input') input: ProductInput) {
    return this.productService.createProduct(input);
  }

  @Mutation(() => CreateProductDTO)
  async deleteProduct(@Args('productID') productID: string) {
    return this.productService.deleteProduct(productID);
  }

  @Query(() => [CreateProductDTO])
  async getLatestProducts() {
    return this.productService.getLatestProducts();
  }
}
