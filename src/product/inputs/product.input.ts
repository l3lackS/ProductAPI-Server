import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ProductInput {
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
    @Field()
    readonly price: number;
}
