import { Request,Response } from "express";

interface Action {
    action(request:Request,response:Response);
}

export {Action}