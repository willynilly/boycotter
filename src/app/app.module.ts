import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CompanyProfilePage } from '../pages/company-profile/company-profile';
import { CampaignProfilePage } from '../pages/campaign-profile/campaign-profile';
import { BoycottPage } from '../pages/boycott/boycott';
import { CampaignsPage } from '../pages/campaigns/campaigns';
import { TabsPage } from '../pages/tabs/tabs';
import { CompanyService } from '../services/company.service';
import { CampaignService } from '../services/campaign.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BoycottPage,
    CampaignsPage,
    CompanyProfilePage,
    CampaignProfilePage,
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
    CampaignsPage,
    CompanyProfilePage,
    CampaignProfilePage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CompanyService,
    CampaignService
  ]
})
export class AppModule { }
