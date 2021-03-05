import { Router } from "express";

import {create} from "./Create";
import {all} from "./All";
import {find} from "./Find"

const userRoutes = Router();

userRoutes.get('/users',all.action)
userRoutes.get('/users/:id?',find.action)
userRoutes.post('/users',create.action)


export {userRoutes}