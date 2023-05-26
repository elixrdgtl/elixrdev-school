import { fstore } from "@/db/firebase-db";
import { collection, doc, setDoc, addDoc, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, DocumentData } from "firebase/firestore";
const userRef = collection(fstore, "accounts");

export interface IUser {
    username: string,
    email?: string
    password: string,
    name: string,
    misc?: any
}

export class User implements IUser {
    username: string;
    email?: string | undefined;
    password: string;
    name: string;
    misc?: any;

    constructor({username,email,password,name,misc}:IUser){
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.misc = misc;
    }
}