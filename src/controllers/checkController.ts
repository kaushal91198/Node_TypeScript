import { Request, Response } from 'express'
import UserModel from '../models/Users'
const home = async (req: Request, res: Response) => {
    let add = addFunc(12, 5)
    let addStringFunc123 = addStringFunc("kaushal", 'panchal')

    //This one has to be asked to rugved 
    //https://stackoverflow.com/questions/35435042/how-can-i-define-an-array-of-objects
    type MyType = {
        id: number;
        name: string;
    }

    //why this is not throwing error
    let users: MyType[] = await UserModel.find()
    res.json({ message: "Home Page", add, name: addStringFunc123, users })
}


const about = async (req: Request, res: Response) => {
    let obj = {
        x: 12,
        y: 5
    }
    let add = add2Func(obj)
    await UserModel.insertMany([{ name: "Kaushal Panchal", dept: "Documentation" }, { name: "Vijay Desai", dept: "IT" }, { name: "Rugved Patel", dept: "Mechanical" },])
    res.json({ message: "About Page", add })
}



//define one inteface, 
interface params {
    x: number
    y: number
}

type sumCheck = (x: params) => number

//Here we made type of function
let addFunc = (a: number, b: number) => {
    return a + b
}

let add2Func: sumCheck = (obj: params) => {
    return obj.x + obj.y
}

let addStringFunc = (a: String, b: String) => {
    return String(a) + String(b)
}


export {
    home, about
}