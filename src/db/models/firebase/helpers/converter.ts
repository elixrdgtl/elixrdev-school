import { fstore } from "@/db/firebase-db";
import { DocumentData, Firestore, FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue, doc } from "firebase/firestore";
import { IUser } from "../user";

export const converter = <T>():FirestoreDataConverter<T> => ({
    toFirestore: (data: WithFieldValue<T>):DocumentData => data as DocumentData,
    fromFirestore: (snapshot: QueryDocumentSnapshot) => snapshot.data() as T
});

export const data = <T>(path: string) => {
    return doc(fstore, path).withConverter(converter<T>())
}