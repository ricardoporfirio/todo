import { Router } from "express";

import {create} from "./Create";
import {all} from "./All";

const userRoutes = Router();

userRoutes.get('/users',all.action)
userRoutes.post('/users',create.action)

export {userRoutes}