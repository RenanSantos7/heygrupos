import { Timestamp } from "@react-native-firebase/firestore";

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