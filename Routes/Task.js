import express from 'express'
import { CreateTask, UpdateTask, getTask, getTasks,DeleteTask } from '../Controllers/Task.js'
import  verifyToken  from '../middleware/Verify.js'
 const router =express.Router()

 router.post('/create',verifyToken,CreateTask)
 router.put('/:id',verifyToken,UpdateTask)
 router.get('/:id',verifyToken,getTask)
 router.get('/',verifyToken,getTasks)
 router.delete('/:id',verifyToken, DeleteTask); //adding del routes;

 export default router