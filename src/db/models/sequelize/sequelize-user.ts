import db from "@/db/sequelize-db"
import { Model, Sequelize, DataTypes } from "sequelize"

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