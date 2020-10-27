import { Tag } from './tag.model';
export class Project {
  constructor(
    public title: string,
    public description: string,
    public type: string,
    public url: string,
    public _id?:string,
    public createdAt?: Date,
    public tags?: Tag[],
    public images?: string[]
  ) {}
}

