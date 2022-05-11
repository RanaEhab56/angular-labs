import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PowerToxPipe } from './power-tox.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {CalendarModule} from 'primeng/calendar';
import {ChipsModule} from 'primeng/chips';
import {GMapModule} from 'primeng/gmap';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    PowerToxPipe,
    StringConvertPipe,
    ArraySplicePipe,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    PasswordModule,RatingModule,CalendarModule,ChipsModule,GMapModule,FileUploadModule,HttpClientModule,MatSliderModule,SharedModule,ProductModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
