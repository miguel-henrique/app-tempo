import { Results } from './results.model';

export class Previsao {

  constructor(
    public by:string,
    public valid_key:boolean,
    public results:Results


  ){}
}
