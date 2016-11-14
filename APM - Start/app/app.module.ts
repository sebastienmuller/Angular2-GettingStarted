import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/Product-Filter.Pipe';
import { StarComponent }  from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Http
 ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
