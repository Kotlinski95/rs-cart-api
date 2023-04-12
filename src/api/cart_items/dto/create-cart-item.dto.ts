import { ApiProperty } from "@nestjs/swagger";

export class CreateCartItemDto {
    @ApiProperty()
    cart_id: string;

    @ApiProperty()
    product_id: string;
}
