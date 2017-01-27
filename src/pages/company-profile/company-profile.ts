import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyService } from '../../services/companies.service';
import { Company } from '../modes/company.model';

@Component({
    selector: 'page-company-profile',
    templateUrl: 'company-profile.html'
})
export class CompanyProfilePage {

    private company: Company;

    constructor(private navParams: NavParams, public navCtrl: NavController, private companyService: CompanyService) {
        this.company = navParams.get('company');
    }

}
