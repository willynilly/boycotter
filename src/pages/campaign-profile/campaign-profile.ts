import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { CampaignService } from '../../services/campaign.service';
import { CompanyService } from '../../services/company.service';

import { Campaign } from '../../models/campaign.model';
import { Company } from '../../models/company.model';

@Component({
    selector: 'page-campaign-profile',
    templateUrl: 'campaign-profile.html'
})
export class CampaignProfilePage {

    private campaign: Campaign;
    private companies: Company[];

    constructor(private navParams: NavParams, private campaignService: CampaignService, private companyService: CompanyService) {
        this.campaign = navParams.get('campaign');
        this.companyService.getCompaniesByCampaign(this.campaign).then((companies: Company[]) => {
            this.companies = companies;
        });
    }

}
