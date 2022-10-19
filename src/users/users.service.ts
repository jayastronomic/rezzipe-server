import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entitiy';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRespository: Repository<User>,
  ) {}

  all(): Promise<User[]> {
    return this.userRespository.find();
  }

  find(id: number): Promise<User> {
    return this.userRespository.findOneBy({ id });
  }

  save(user: User) {
    this.userRespository.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.userRespository.delete(id);
  }
}
