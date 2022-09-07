import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
import UserModel, { UserDocument } from '../models/Users'

export function createUser(input: DocumentDefinition<UserDocument>) {
    return UserModel.create(input)
}


export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
    return UserModel.find(query, {}, options)
}

export function findAndUpdateUser(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions) {
    return UserModel.findOneAndUpdate(query, update, options)
}

export function deleteUser(query: FilterQuery<UserDocument>) {
    return UserModel.deleteOne(query)
}

