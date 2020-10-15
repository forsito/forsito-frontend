import { Project } from './project.model';

export class Crew {
  constructor(
    private name: string,
    private title: string,
    private _id?:string,
    private image?: string,
    private bio?: string,
    private permission?: number,
    private projects?: Project[]
  ) {}
}
