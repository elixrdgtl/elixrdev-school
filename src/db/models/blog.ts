import { DATE, DataTypes } from "sequelize";
import db from "../sequelize-helper";
import { unique } from "next/dist/build/utils";

export const Blog = db.define("Blog",{
    blogId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true
    },
    title:{
        allowNull:false,
        type:DataTypes.STRING
    },
    content:{
        type:DataTypes.JSON
    },
    datePosted:{
        type:DataTypes.DATE
    },
    dateUpdated:{
        type:DataTypes.DATE,
        allowNull:true
    },
    createdBy:{
        type:DataTypes.INTEGER
    },
    thumbnail:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

Blog.sync();