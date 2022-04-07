import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchase } from './purchase';

@ObjectType('User')
//? Common id among the services
@Directive('@key(fields: "authUserId")')
export class Customer {
  //? This field represents the unique identifier of the product.
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
