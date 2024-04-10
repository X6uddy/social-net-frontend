import { IUser } from "./user.types";

export interface IMessage {
    id: string;
    text: string;
    createdAt: string;
    sender: IUser;
}
export interface IChat {
	id: number
	messages: IMessage[]
	participants: IUser[]
}
