import { Component } from '@angular/core';

import { BoycottPage } from '../boycott/boycott';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BoycottPage;
  tab2Root: any = AboutPage;

  constructor() {

  }
}
