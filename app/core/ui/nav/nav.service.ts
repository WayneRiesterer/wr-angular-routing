import { Injectable } from '@angular/core';

import { RouterLink } from './models/router-link.model';

@Injectable()
export class NavService {
  private _links: Array<RouterLink> = [
    new RouterLink('Home', '/'),
    new RouterLink('About', '/about'),
    new RouterLink('Contact', '/contact')
  ];

  getLinks(): Array<RouterLink> { return this._links; }
}