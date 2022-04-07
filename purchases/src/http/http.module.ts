import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import path from 'node:path';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from '../services/product.service';
import { PurchasesService } from '../services/purchase.service';
import { PurchaseResolver } from './graphql/resolvers/purchase.resolver';
import { CustomerService } from '../services/customers.service';
import { CustomerResolver } from './graphql/resolvers/customers.resolver';
import { MessagingModule } from '../messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductsService,

    PurchaseResolver,
    PurchasesService,

    CustomerResolver,
    CustomerService,
  ],
})
export class HttpModule {}
