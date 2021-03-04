import {Router} from "express";

import  {userRoutes}  from "./http/actions/users";

const router = Router();

router.use(userRoutes);

export {router}