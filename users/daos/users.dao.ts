import shortid from "shortid";
import debug from "debug";

import { CreateUserDto } from "../dtos/create.user.dto";
import { PutUserDto } from "../dtos/put.user.dto";

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    users: Array<CreateUserDto> = [];

    constructor() {
        log('Created new instance of UsersDao')
    }

    async addUser(user: CreateUserDto) {
        user.id = shortid.generate();
        this.users.push(user);
        return user.id;
    }

    async getUsers() {
        return this.users;
    }

    async getUserById(userId: string) {
        return this.users.find((user: { id:  string }) => {
            user.id === userId
        });
    }

    async updateUserById(userId: string, user: PutUserDto) {
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
        let currentUser = this.users[objIndex];
        const allowedUpdatefields = [
            'password',
            'firstName',
            'lastName',
        ];
        for (let field of allowedUpdatefields) {
            if(field in user) {
                // @ts-ignore
                currentUser[field] = user[field];
            }
        }
        this.users.splice(objIndex, 1, currentUser);
        return `Updated user with ID: ${user.id}`; 
    }
    
    async deleteUserById(userId: string) {
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
        this.users.splice(objIndex, 1);
        return `Removed user with ID: ${userId}`;
    }
}

export default new UsersDao();