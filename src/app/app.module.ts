import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { KtdhijriComponent } from './ktd-hijri/ktdhijri/ktdhijri.component';

@NgModule({
  declarations: [
    KtdhijriComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents:[KtdhijriComponent]
})
export class AppModule implements  DoBootstrap {
  constructor(injector: Injector){
    const kTDHijri = createCustomElement(KtdhijriComponent, {injector});
    customElements.define('k-td-hijri', kTDHijri);
  }

  ngDoBootstrap(){}
}
