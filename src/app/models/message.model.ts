export class Message {
  constructor(
    private name: string,
    private email: string,
    private phone: string,
    private message: string,
    private _id?:string,
    private createdAt?: Date
  ) {}
}
