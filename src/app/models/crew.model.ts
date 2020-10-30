import { Project } from './project.model';

export class Crew {
  constructor(
    public name: string,
    public title: string,
    public _id?: string,
    public image?: string,
    public bio?: string,
    public permission?: number,
    public projects?: string[],
    public createdAt?: Date
  ) {}
}
