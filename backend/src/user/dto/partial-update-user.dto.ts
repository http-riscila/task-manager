import { PartialType } from '@nestjs/mapped-types';
import { UpdateUserDto } from './update-user.dto';

export class PartialUpdateUserDto extends PartialType(UpdateUserDto) {}
