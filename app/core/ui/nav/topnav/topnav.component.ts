import { Component, OnInit } from '@angular/core';

import { NavService } from '../nav.service';
import { RouterLink } from '../models/router-link.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  private _links: Array<RouterLink>;

  constructor(private navService: NavService) {}

  ngOnInit() {
    this._links = this.navService.getLinks();
  }

  get links(): Array<RouterLink> { return this._links; }
}