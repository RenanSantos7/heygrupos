import { FirebaseFirestoreTypes, Timestamp } from "@react-native-firebase/firestore";

export interface IChat {
    id: string;
    name: string;
    lastMessage: {
        text: string;
        createdAt?: Timestamp
    },
    owner?: string;
}

export interface IUser {
    uid: string;
    email: string;
    name: string;
    photoUrl?: string;
}

export interface IMessage {
    id: string;
    text: string;
    createdAt: FirebaseFirestoreTypes.FieldValue;
    system?: boolean,
    user?: {
        id: string;
        name: string;
    }
}