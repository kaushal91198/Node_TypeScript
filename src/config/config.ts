import mongoose, { connect } from 'mongoose'

function connects() {
    const url:string = 'mongodb://localhost/users';
    connect(url).then((): void => {
        console.log("Database connected")
    }).catch((err: any): void => {
        console.log(err)
    })

}

export default connects
