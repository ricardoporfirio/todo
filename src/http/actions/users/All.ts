import { Request,Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../models/User";
import { Action } from "./Action";

class All implements Action{
    async action(request:Request,response:Response) {
        
        const userRepository = getRepository(User);
        const users = await userRepository.find();

        return response.status(200).json(
            users
        )
    }
}

const all = new All();

export {all}