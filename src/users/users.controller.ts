import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async index(): Promise<User[]> {
    return this.usersService.all();
  }

  @Get(':id')
  async show(@Param() params): Promise<User> {
    return this.usersService.find(params.id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.save(createUserDto);
  }
}
