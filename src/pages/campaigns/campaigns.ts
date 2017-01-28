import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';
import { CampaignProfilePage } from '../campaign-profile/campaign-profile';

@Component({
    selector: 'page-campaigns',
    templateUrl: 'campaigns.html'
})
export class CampaignsPage {

    private campaigns: Campaign[];
    private filteredCampaigns: Campaign[];
    private searchText: string = '';

    constructor(public navCtrl: NavController, private campaignService: CampaignService) {
        this.campaignService.getCampaigns().then((campaigns: Campaign[]) => {
            this.campaigns = campaigns;
            this.filteredCampaigns = this.campaigns.slice(0);
        });
    }

    search(event: any) {
        let searchText = this.searchText.trim();
        if (searchText === '') {
            this.filteredCampaigns = this.campaigns.slice(0);
        } else {
            this.filteredCampaigns = this.campaigns.filter((campaign: Campaign) => {
                return campaign.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            });
        }
    }

    selectCampaign(campaign: Campaign) {
        this.navCtrl.push(CampaignProfilePage, { 'campaign': campaign });
    }

}
