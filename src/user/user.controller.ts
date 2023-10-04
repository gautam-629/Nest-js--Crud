import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { };

    @Post()
    store(@Body() createUserDto: CreateUserDto) {
        return this.userService.store(createUserDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findSingleUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findSingleUser(id);
    }
}
