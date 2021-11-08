import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ValidateEqualModule } from 'ng-validate-equal';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BallModule } from './components/ball/ball.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SharedModule } from './shared/shared.module';
 
import { AppComponent } from './app.component';
import { NzModalComponent } from './components/home/modal/modal.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/home/user/user.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

import { DummyHttpInterceptor } from './core/services/dummy-interceptor.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    NzModalComponent,
    PageNotfoundComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ValidateEqualModule,
    NzModalModule,
    BrowserAnimationsModule,
    BallModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MyLibModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {return new TranslateHttpLoader(http, '/assets/i18n/', '.json');},
        deps: [HttpClient]
      }
    }),
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: DummyHttpInterceptor,
    multi: true
  },
  { provide: NZ_I18N, useValue: en_US }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
