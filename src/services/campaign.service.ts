import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Campaign } from '../models/campaign.model'
import _ from 'lodash';
import 'rxjs/Rx';

@Injectable()
export class CampaignService {

    constructor(private http: Http) {

    }

    getCampaigns(): Promise<Campaign[]> {
        return this.http.get('./assets/json/campaigns.json')
            .map((resp: Response) => {
                let campaigns: Campaign[] = resp.json();
                campaigns = _.sortBy(campaigns, 'name');
                return campaigns;
            })
            .toPromise();
    }

}