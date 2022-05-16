import express from 'express';

import {createUser,getUsers,getUser,deleteUser,updateUser} from '../model/users.js';

const router = express.Router(); //this is to initialize the router

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

export default router; //this is done so that we can use it in the Index.js file