import { PartialType } from "@nestjs/swagger";

import { TokenDto } from "./token.dto";

export class RefreshTokenDto extends PartialType(TokenDto) {}
