import { Request,Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../models/User";
import { Action } from "./Action";

class Create implements Action{
    async action(request:Request,response:Response) {
        const {name,email,password} = request.body;
        
        const userRepository = getRepository(User);

        // Add validations

        const user = userRepository.create({name,email,password});

        await userRepository.save(user);


        return response.status(200).json({
            message:"User created successfully",
            user:user
        })


    }
}

const create =  new Create();

export {create}