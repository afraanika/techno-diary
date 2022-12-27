import express from "express";
import usersService from "../services/users.service";
import debug from "debug";

const log: debug.IDebugger = debug('app:users-controller');
class UsersMiddleWare {

    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body && req.body.email && req.body.password) {
            next();
        }
        else {
            res.status(400).send({
                error: `Missing required fields & password`
            });
        }
    }

    async validateSameEmailExistence(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await usersService.readById
    }
}

export default new UsersMiddleWare();