import { Router } from "express";

import {create} from "./Create";

const userRoutes = Router();

userRoutes.post('/users',create.action)

export {userRoutes}