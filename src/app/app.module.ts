import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import {SharedModule} from "./shared/shared.module";
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ElectronService } from './providers/electron.service';
import { WebviewDirective } from './directives/webview.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import {DialogOverviewExampleDialog} from './components/product/product.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    UserComponent,
    ProductComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  entryComponents: [DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
