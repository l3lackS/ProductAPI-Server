import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';

import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
  providers: [ProductResolver, ProductService]
})
export class ProductModule {}
