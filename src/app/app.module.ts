import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrevisaoService } from './previsao/previsao.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PrevisaoComponent } from './previsao/previsao.component';


@NgModule({
  declarations: [
    AppComponent,
    PrevisaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule

  ],
  providers: [
    PrevisaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
