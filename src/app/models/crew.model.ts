import { Project } from './project.model';

export class Crew {
  constructor(
    public name: string,
    public title: string,
    public _id?: string,
    public image?: string,
    public bio?: string,
    public permission?: number,
    public projects?: { _id: string; title: string }[],
    public createdAt?: Date
  ) {}
}
