import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompanyService } from '../../services/companies.service';
import { Company } from '../modes/company.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private companies: Company[];
  private foxNewsCompanies: Company[];
  private filteredFoxNewsCompanies: Company[];
  private searchText: string = '';

  constructor(public navCtrl: NavController, private companyService: CompanyService) {
    this.companyService.getCompanies().then((companies: Company[]) => {
      this.companies = companies;
      this.foxNewsCompanies = this.filterByAdvertisesOn('Fox News');
      this.filteredFoxNewsCompanies = this.foxNewsCompanies.slice(0);
    });
  }

  search(event: any) {
    console.log(this.searchText);
    this.searchText = this.searchText.trim();
    if (this.searchText === '') {
      this.filteredFoxNewsCompanies = this.foxNewsCompanies.slice(0);
    } else {
      this.filteredFoxNewsCompanies = this.foxNewsCompanies.filter((c: Company) => {
        return c.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
      });
    }
  }

  filterByAdvertisesOn(mediaName: string): Company[] {
    return this.companies.filter((company) => {
      return company.advertisesOn.indexOf(mediaName) !== -1;
    });
  }

}
