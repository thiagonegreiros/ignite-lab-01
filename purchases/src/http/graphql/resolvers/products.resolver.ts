import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ProductsService } from '../../../services/product.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { CreateProductInput } from '../input/create-product-input';

import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productService.listAllProducts();
  }

  @Mutation(() => Product)
  @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productService.createProduct(data);
  }
}
