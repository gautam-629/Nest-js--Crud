import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)

        private UserRepository: Repository<User>,
    ) { }
    store(createUserDto: CreateUserDto) {
        return this.UserRepository.save(createUserDto);
    }
    findAll() {
        return this.UserRepository.find();
    }
    findSingleUser(id: number) {
        console.log(id)
        return this.UserRepository.findOne({ where: { id } })
    }
}
