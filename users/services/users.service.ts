import UsersDao from "../daos/users.dao";
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateUserDto } from '../dtos/create.user.dto';
import { PutUserDto } from '../dtos/put.user.dto';

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.deleteUserById(id);
    };

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async readById(id: string){
        return UsersDao.getUserById(id);
    }

    async updateById(id: string, resource: any){
        return UsersDao.updateUserById(id, resource);
    }
}

export default new UsersService();