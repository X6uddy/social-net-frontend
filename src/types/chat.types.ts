export interface IMessage {
    id: string;
    text: string;
    createdAt: string;

}

export interface IChat {
    id: string;
    messages: IMessage[];
}