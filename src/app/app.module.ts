import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, NotificationInterceptor } from './home';
import localZh from '@angular/common/locales/zh-Hans'
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ParamInterceptor } from './home/interceptor/param.interceptor';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ProductModule } from './product/product.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    MyModule,
    ProductModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh')
  }
}
