export class Rooms {
  public constructor(
    public name: string,
    public id:string,
    public numberAvailable: number,
    public space: peopleToSpace,
    public price:number,
    public description:string,
    public favorite:boolean,
    public images: string[]
  )
  {}
}

enum peopleToSpace {
forOne =19,
forTwo = 30,
forThree = 45
}