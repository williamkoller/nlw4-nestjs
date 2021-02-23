import { ReturnMessageType } from '@/user/types/return-message/return-message.type';
import { FindOneParamsDto } from '@/user/dtos/find-one-params/find-one-params.dto';

export class UserService {
  getMessage(params: FindOneParamsDto): ReturnMessageType {
    const { name } = params;
    return {
      message: `Hello world - ${name}`,
    };
  }
}
