import express from 'express'
import {  userCreate, userFind, userFindAndUpdate, userDelete, staticMethod } from '../controllers/userController'
import { home, about } from '../controllers/checkController'

const router = express.Router()

router.get('/', home)

router.get('/about', about)

router.get('/create', userCreate)

router.get('/find', userFind)

router.get('/update', userFindAndUpdate)

router.get('/delete', userDelete)

router.get('/static', staticMethod)

router.get('/static2 ', staticMethod)




export { router }