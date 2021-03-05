import { json, Request,Response } from "express";
import { getRepository } from "typeorm";
import bcryptjs from "bcryptjs"
import { User } from "../../models/User";
import { Action } from "./Action";

class Update implements Action {
    async action(request:Request,response:Response) {
        const {name,email,password} = request.body;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email})
        
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password,salt);

        const userEditable = userRepository.create({
            id:user.id,
            name,
            email,
            password:hash
        })
    
        userRepository.merge(user,userEditable);

        await userRepository.save(user)

        return response.status(200).json(user)
    }
}

const update = new Update();

export {update}