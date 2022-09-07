import { Request, Response } from 'express'
import UserModel from '../models/Users'
import { createUser, findUser, findAndUpdateUser, deleteUser } from '../services/userService'


//create method
const userCreate = async (req: Request, res: Response) => {
    const users = await createUser({ name: "Kaushal Panchal", dept: "Documentation" })
    res.json({ message: "user Create Page", users })
}

//read method
const userFind = async (req: Request, res: Response) => {
    //this can also work
    // const users = await findUser({ name: "Kaushal Panchal", dept: "Documentation" })

    const users = await findUser({ _id: '63175d8d80684ccaf8186911' })
    res.json({ message: "user Find Page", users })
}

//update method
const userFindAndUpdate = async (req: Request, res: Response) => {
    const users = await findAndUpdateUser({ name: "Kaushal Panchal" }, { dept: "Electrical" }, { new: true })
    res.json({ message: "user Find Page", users })
}

//delete method
const userDelete = async (req: Request, res: Response) => {

    const users = await deleteUser({ _id: '63175d9e80684ccaf8186914' })
    res.json({ message: "user Find Page", users })
}

//static method
const staticMethod = async (req: Request, res: Response) => {
    const users = await UserModel.myNewStaticFN()
    res.json({ message: "user Find Page", users })
}



export {
    userCreate, userFind, userFindAndUpdate, userDelete, staticMethod
}