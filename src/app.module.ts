import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  	GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb+srv://test:091019@cluster0-eofhw.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
