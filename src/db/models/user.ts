import db from "@/db/sequelize-helper"
import { Model, Sequelize, DataTypes } from "sequelize"

export interface IRegisterValues {
    username: string,
    email?: string
    password: string,
    name: string,
    misc: any
}

export const User = db.define("User",{
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false        
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:DataTypes.STRING,
    name:DataTypes.STRING,
    misc:DataTypes.JSON
});

User.sync();