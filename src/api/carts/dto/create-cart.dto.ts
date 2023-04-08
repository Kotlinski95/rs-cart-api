import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    user_id: string;
}
