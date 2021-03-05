import { Request,Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../models/User";
import { Action } from "./Action";

class Delete implements Action {

    async action(request:Request,response:Response) {
        const {id} = request.params

        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        await userRepository.delete(id);

        return response.status(200).json(user)
        
    }
}

const deleted = new Delete();

export {deleted}

