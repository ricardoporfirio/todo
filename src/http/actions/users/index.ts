import { Router } from "express";

import {create} from "./Create";
import {all} from "./All";
import {find} from "./Find"
import {update} from "./Update"
import {deleted} from "./Delete"

const userRoutes = Router();

userRoutes.get('/users',all.action)
userRoutes.get('/users/:id?',find.action)
userRoutes.delete('/users/:id?',deleted.action)
userRoutes.post('/users',create.action)
userRoutes.put('/users',update.action)


export {userRoutes}