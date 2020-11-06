export class Results {
  constructor(
    public temp:string,
    public date:string,
    public city:string,
    public time:string,
    public condition_code:string,
    public description:string,
    public forecast:any[]
  ){}
}
