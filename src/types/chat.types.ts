export interface IMessage {
    text: string;
    createdAt: string;
}

export interface IChat {
    messages: IMessage[]
}