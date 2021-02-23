import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '@/user/services/user.service';
import { ReturnMessageType } from '@/user/types/return-message/return-message.type';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindOneParamsDto } from '../dtos/find-one-params/find-one-params.dto';
import { ValidationParamsPipe } from '@/common/pipes/validation-params/validation-params.pipe';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':name')
  @ApiResponse({
    status: 200,
    description: 'Hello word - NLW4',
  })
  getMessage(
    @Param(ValidationParamsPipe) params: FindOneParamsDto,
  ): ReturnMessageType {
    return this.userService.getMessage(params);
  }
}
