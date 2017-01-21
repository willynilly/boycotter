import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Company } from '../models/company.model'
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

}