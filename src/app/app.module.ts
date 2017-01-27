import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CompanyProfilePage } from '../pages/company-profile/company-profile';
import { BoycottPage } from '../pages/boycott/boycott';
import { TabsPage } from '../pages/tabs/tabs';
import { CompanyService } from '../services/companies.service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BoycottPage,
    CompanyProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BoycottPage,
    CompanyProfilePage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CompanyService
  ]
})
export class AppModule { }
