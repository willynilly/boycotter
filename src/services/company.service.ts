import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Company } from '../models/company.model';
import { Campaign } from '../models/campaign.model';

import _ from 'lodash';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {

    constructor(private http: Http) {

    }

    getCompanies(): Promise<Company[]> {
        return this.http.get('./assets/json/companies.json')
            .map((resp: Response) => {
                let companies: Company[] = resp.json();
                companies = _.sortBy(companies, 'name');
                return companies;
            })
            .toPromise();
    }

    getCompaniesByCampaign(campaign: Campaign): Promise<Company[]> {
        return new Promise((resolve, reject) => {
            this.getCompanies().then((companies: Company[]) => {
                resolve(companies.filter((company: Company) => {
                    return campaign.companies.indexOf(company.id) !== -1;
                }));
            }).catch((err) => {
                reject(err);
            });
        });
    }

}