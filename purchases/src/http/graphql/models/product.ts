import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  //? This field represents the unique identifier of the product.
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  slug: string;
}
