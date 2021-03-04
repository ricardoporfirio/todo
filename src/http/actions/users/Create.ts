import { Request,Response } from "express";
import { Action } from "./Action";

class Create implements Action{
    async action(request:Request,response:Response) {
        const data = request.body;
        console.log(data);
        return response.send();
    }
}

const create =  new Create();

export {create}