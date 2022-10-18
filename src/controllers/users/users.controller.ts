import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  index(): any {
    return 'This action returns all users';
  }

  @Get(':id')
  show(@Param() params): any {
    return `This action returns user ${params.id}`;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
