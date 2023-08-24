import { Router } from "express";
import {getUsers, getUser} from "../controllers/user.controller";
import {signUp, signIn} from '../controllers/user.controller'
import passport from 'passport'

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", passport.authenticate('jwt', { session: false }), getUser);

//Agregar para jwt
router.post('/signup', signUp);
router.post('/signin', signIn);

// router.post('/token', refresh);

export default router;
