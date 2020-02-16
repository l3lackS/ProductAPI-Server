import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CreateProductDTO {
    @Field(() => ID)
    id?: string;
	@Field()
    readonly name: string;
    @Field()
    readonly description: string;
    @Field()
    readonly imageURL: string;
    @Field()
    readonly size: string;
    @Field()
    readonly color: string;
    @Field(() => Int)
    readonly price: number;
    @Field()
    readonly createdAt?: Date;
}