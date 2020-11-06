import { Component, OnInit } from '@angular/core';
import { PrevisaoService } from './previsao.service';
import { Previsao } from './previsao.model';
import { Results } from './results.model';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.css']
})
export class PrevisaoComponent implements OnInit {
  private previsao:Previsao;
  private results:Results;

  constructor(private previsaoService:PrevisaoService) {
      this.previsao = new Previsao('',true,new Results('','','','','','',[]));
      this.results = new Results('','','','','','',[]);

  }

  ngOnInit() {
    this.previsaoService.getPrevisaoWS().
    then((previsao: Previsao) => {
        this.previsao = previsao;
        this.results = previsao.results;
        console.log("Previsão: "+previsao.results.forecast[0].date);
        console.log("Previsão: "+previsao.results.forecast[0].date);

    }).catch(err =>{
      console.log(err);
    });
  }

  teste(){

    console.log("Previsão" + this.previsao.by);
  }

}
