import { Tag } from './tag.model';
export class Project {
  constructor(
    private title: string,
    private description: string,
    private type: string,
    private url: string,
    private _id?:string,
    private createdAt?: Date,
    private tags?: Tag[],
    private images?: string[],
  ) {}
}
