import _ from 'lodash';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompanyService } from '../../services/company.service';
import { CampaignService } from '../../services/campaign.service';

import { Campaign } from '../../models/campaign.model';
import { Company } from '../../models/company.model';
import { CompanyProfilePage } from '../company-profile/company-profile';

@Component({
  selector: 'page-boycott',
  templateUrl: 'boycott.html'
})
export class BoycottPage {

  private campaigns: Campaign[];
  private allCompanies: Company[];
  private searchText: string = '';
  private companiesByCampaign: Object;
  private filteredCompaniesByCampaign;

  constructor(public navCtrl: NavController, private companyService: CompanyService, private campaignService: CampaignService) {
    this.companyService.getCompanies().then((companies: Company[]) => {
      this.allCompanies = companies;
      this.campaignService.getCampaigns().then((campaigns: Campaign[]) => {
        this.campaigns = campaigns;
        this.companiesByCampaign = this.filterCompaniesByCampaigns(this.campaigns);
        this.filteredCompaniesByCampaign = _.cloneDeep(this.companiesByCampaign);
      });
    });
  }

  filterCompaniesByCampaigns(campaigns: Campaign[]) {
    let companiesByCampaigns = {};
    campaigns.forEach((campaign: Campaign) => {
      companiesByCampaigns[campaign.id] = this.filterByCampaign(campaign);
    });
    return companiesByCampaigns;
  }

  filterCampaignCompaniesBySearchText(searchText) {
    searchText = searchText.trim();
    let filteredCompaniesByCampaign = {};
    if (searchText === '') {
      filteredCompaniesByCampaign = _.cloneDeep(this.companiesByCampaign);
    } else {
      for (let campaignId in this.companiesByCampaign) {
        filteredCompaniesByCampaign[campaignId] = this.companiesByCampaign[campaignId].filter((c: Company) => {
          return c.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
        });
      }
    }
    return filteredCompaniesByCampaign;
  }

  search(event: any) {
    this.filteredCompaniesByCampaign = this.filterCampaignCompaniesBySearchText(this.searchText);
  }

  filterByCampaign(campaign: Campaign): Company[] {
    return this.allCompanies.filter((company: Company) => {
      return campaign.companies.indexOf(company.id) !== -1;
    });
  }

  selectCompany(company: Company) {
    this.navCtrl.push(CompanyProfilePage, { 'company': company });
  }

}
