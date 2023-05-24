import { fstore } from "@/db/firebase-db";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { IUser } from "@/db/models/generic/d.user"

const userRef = collection(fstore, "accounts");

export async function insertUser() {
    const user:IUser = {
        username:"name",
        password:"019203891203",
        name:"Elijah John",
        misc:{}
    }
    return await addDoc(collection(userRef,"/"),user)
}

export async function getUser(){
       
}