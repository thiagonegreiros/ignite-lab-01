import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchase } from './purchase';

@ObjectType()
export class Customer {
  //? This field represents the unique identifier of the product.
  @Field(() => ID)
  id: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
